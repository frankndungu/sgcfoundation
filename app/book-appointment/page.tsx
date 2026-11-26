// app/book-appointment/page.tsx
import type { Metadata } from 'next';
import {
  MessageCircle,
  Phone,
  Mail,
  Shield,
  Clock,
  User,
  Heart,
  HeartHandshake,
  Users,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsappLink,
} from '@/lib/contact';

export const dynamic = 'force-static';
export const revalidate = false;

const OG_IMAGE =
  'https://res.cloudinary.com/kwishi/image/upload/v1794824397/SGCF/og-booking_eycics.png';

export const metadata: Metadata = {
  title: 'Book a Session on WhatsApp | SGCF',
  description:
    'Book a confidential counseling session with Susan Gitau Counseling Foundation in seconds. Message us on WhatsApp and we will arrange a time that works for you.',
  keywords: [
    'book counseling appointment Kenya',
    'counseling WhatsApp Kenya',
    'mental health counseling Kenya',
    'trauma therapy appointment',
    'couples counseling Kenya',
    'community support groups Kenya',
    'SGCF partnerships',
  ].join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sgcfoundation.org/book-appointment',
  },
  openGraph: {
    title: 'Book a Session on WhatsApp | SGCF',
    description:
      'Message Susan Gitau Counseling Foundation on WhatsApp to book a confidential counseling session.',
    url: 'https://sgcfoundation.org/book-appointment',
    siteName: 'Susan Gitau Counseling Foundation',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Book a session with Susan Gitau Counseling Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Session on WhatsApp | SGCF',
    description: 'Message us on WhatsApp to book a confidential counseling session.',
    images: [OG_IMAGE],
  },
};

const WHATSAPP_GREEN = '#25D366';

const options = [
  {
    icon: User,
    title: 'Individual counseling',
    message: "Hello SGCF, I'd like to book an individual counseling session.",
  },
  {
    icon: HeartHandshake,
    title: 'Couples counseling',
    message: "Hello SGCF, we'd like to book a couples counseling session.",
  },
  {
    icon: Heart,
    title: 'Trauma recovery',
    message: "Hello SGCF, I'd like to book a session for trauma recovery support.",
  },
  {
    icon: Users,
    title: 'School, workplace or community program',
    message:
      "Hello SGCF, I'd like to ask about a school, workplace or community mental health program.",
  },
  {
    icon: Handshake,
    title: 'Partnership or donation',
    message: "Hello SGCF, I'd like to talk about partnering with or supporting the foundation.",
  },
];

const steps = [
  { title: 'Message us', text: 'Tap a WhatsApp button and your message is ready to send.' },
  { title: 'Pick a time', text: 'We reply to agree on a time that works for you.' },
  { title: 'Meet your counselor', text: 'Attend your session in person or online.' },
];

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen pt-44 md:pt-36 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4">
            Book a Session on{' '}
            <span style={{ color: '#128C7E' }}>WhatsApp</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Send us a message and we&apos;ll arrange a time that works for you. No forms, no waiting.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ background: WHATSAPP_GREEN }}
          >
            <MessageCircle size={24} />
            <span>Book on WhatsApp</span>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            WhatsApp {PHONE_DISPLAY}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <Shield size={16} className="text-primary" /> Confidential
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} className="text-primary" /> Flexible scheduling
            </span>
          </div>
        </div>

        {/* Quick options */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            Or tell us what you need
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map(({ icon: Icon, title, message }) => (
              <a
                key={title}
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#25D366] hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </span>
                <span className="flex-1 font-semibold text-gray-800">{title}</span>
                <ArrowRight
                  size={18}
                  className="text-gray-400 transition-transform group-hover:translate-x-1"
                  style={{ color: WHATSAPP_GREEN }}
                />
              </a>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">How it works</h2>
          <ol className="grid sm:grid-cols-3 gap-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="rounded-2xl bg-gray-50 p-5 text-center">
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {idx + 1}
                </span>
                <p className="font-semibold text-gray-800">{step.title}</p>
                <p className="mt-1 text-sm text-gray-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Other ways */}
        <section className="text-center">
          <p className="text-gray-600 mb-4">Prefer not to use WhatsApp?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <Mail size={18} /> {EMAIL}
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            In a life-threatening emergency, call 999 or go to your nearest hospital.
          </p>
        </section>
      </div>
    </div>
  );
}
