import PortfolioClient from "@/components/portfolio/PortfolioClient";


export const dynamic = 'force-static';
export const revalidate = false;

export default function PortfolioPage() {
  return <PortfolioClient />;
}