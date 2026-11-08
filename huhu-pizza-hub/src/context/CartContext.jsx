import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const loadSavedCartItems = () => {
  try {
    const saved = JSON.parse(localStorage.getItem('huhus-cart') || '{}');
    if (!Array.isArray(saved.items)) return [];

    return saved.items
      .filter((item) => (
        item &&
        typeof item.id === 'string' &&
        typeof item.name === 'string' &&
        Number.isFinite(item.price) &&
        item.price >= 0 &&
        Number.isSafeInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 99
      ))
      .slice(0, 50);
  } catch {
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.size === action.payload.size)
        ),
      };
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.id === action.payload.id && item.size === action.payload.size)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'SET_DELIVERY_INFO':
      return { ...state, deliveryInfo: { ...state.deliveryInfo, ...action.payload } };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  isOpen: false,
  deliveryInfo: {
    name: '',
    phone: '',
    location: '',
    landmark: '',
    notes: '',
  },
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => ({
    ...initialState,
    items: loadSavedCartItems(),
  }));

  useEffect(() => {
    try {
      localStorage.setItem('huhus-cart', JSON.stringify({ items: state.items }));
    } catch {
      // Cart state remains available in memory if browser storage is unavailable.
    }
  }, [state.items]);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id, size) => dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  const updateQuantity = (id, size, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const setDeliveryInfo = (info) => dispatch({ type: 'SET_DELIVERY_INFO', payload: info });

  const getTotalItems = () => state.items.reduce((sum, item) => sum + item.quantity, 0);
  const getSubtotal = () => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getDeliveryFee = () => getSubtotal() >= 2000 ? 0 : 150;
  const getTotal = () => getSubtotal() + getDeliveryFee();

  const formatWhatsAppMessage = () => {
    const { items, deliveryInfo } = state;
    if (items.length === 0) return '';

    let message = 'Hello Huhus, I would like to order:\n\n';
    
    items.forEach((item, index) => {
      const sizeText = item.size ? ` (${item.size})` : '';
      message += `${index + 1}. ${item.name}${sizeText} x${item.quantity} - KES ${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\nSubtotal: KES ${getSubtotal().toLocaleString()}`;
    
    const deliveryFee = getDeliveryFee();
    if (deliveryFee > 0) {
      message += `\nDelivery: KES ${deliveryFee.toLocaleString()}`;
    } else {
      message += '\nDelivery: FREE';
    }
    
    message += `\nTotal: KES ${getTotal().toLocaleString()}`;

    if (deliveryInfo.name) message += `\n\nName: ${deliveryInfo.name}`;
    if (deliveryInfo.phone) message += `\nPhone: ${deliveryInfo.phone}`;
    if (deliveryInfo.location) message += `\nLocation: ${deliveryInfo.location}`;
    if (deliveryInfo.landmark) message += `\nLandmark: ${deliveryInfo.landmark}`;
    if (deliveryInfo.notes) message += `\nNotes: ${deliveryInfo.notes}`;

    message += '\n\nPlease confirm my order. Thank you!';
    
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/254743830555?text=${formatWhatsAppMessage()}`;

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        setDeliveryInfo,
        getTotalItems,
        getSubtotal,
        getDeliveryFee,
        getTotal,
        whatsappUrl,
        formatWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
