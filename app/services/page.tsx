import ServicesClient from "@/components/service/ServicesClient";


export const dynamic = 'force-static';
export const revalidate = false;

export default function ServicesPage() {
  return <ServicesClient />;
}