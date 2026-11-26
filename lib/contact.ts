// Single source of truth for SGCF contact details.

export const WHATSAPP_NUMBER = '254722367619'; // international format, no "+" (wa.me requires this)
export const PHONE_DISPLAY = '+254 722 367 619';
export const PHONE_HREF = 'tel:+254722367619';
export const EMAIL = 'info@sgcfoundation.org';

export const DEFAULT_BOOKING_MESSAGE =
  "Hello SGCF, I'd like to book a counseling session.";

/** Opens a WhatsApp chat with SGCF, optionally with a pre-filled message. */
export function whatsappLink(message: string = DEFAULT_BOOKING_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
