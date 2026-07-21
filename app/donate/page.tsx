import DonateClient from "@/components/donate/DonateClient";


export const dynamic = 'force-static';
export const revalidate = false;

export default function DonatePage() {
  return <DonateClient />;
}