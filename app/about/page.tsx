import AboutClient from "@/components/about/AboutClient";


//Static generation config (only works in Server Components)
export const dynamic = 'force-static';
export const revalidate = false;

export default function AboutPage() {
  // Parent renders the child component
  return <AboutClient />;
}