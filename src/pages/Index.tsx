import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SiteCreation from "@/components/sections/SiteCreation";
import ServiceFeedback from "@/components/sections/ServiceFeedback";
import Activities from "@/components/sections/Activities";
import Documentation from "@/components/sections/Documentation";
import DNS from "@/components/sections/DNS";
import Troubleshooting from "@/components/sections/Troubleshooting";
import Redirects from "@/components/sections/Redirects";
import Serverless from "@/components/sections/Serverless";
import Security from "@/components/sections/Security";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SiteCreation />
        <ServiceFeedback />
        <Activities />
        <Documentation />
        <DNS />
        <Troubleshooting />
        <Redirects />
        <Serverless />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
