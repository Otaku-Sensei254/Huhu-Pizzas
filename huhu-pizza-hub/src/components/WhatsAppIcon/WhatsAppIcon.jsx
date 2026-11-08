import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = ({ className = '' }) => (
  <FaWhatsapp className={`whatsapp-brand-icon ${className}`.trim()} aria-hidden="true" focusable="false" />
);

export default WhatsAppIcon;
