import ContactClient from "@/components/contact/ContactClient";


export const dynamic = 'force-static';
export const revalidate = false;

export default function ContactPage() {
  return <ContactClient />;
}