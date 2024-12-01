import HeroSection from "@/components/elements/HomePage/HeroSection";
import IndustriesWeServeSecion from "@/components/elements/HomePage/IndustriesWeServe";
import OurLeadershipTeam from "@/components/elements/HomePage/OurLeadershipTeam";
import VidoeoSection from "@/components/elements/HomePage/VidoesSection";
import WhoWeAreSection from "@/components/elements/HomePage/WhoWeAre";
import OurPartnersSection from "@/components/elements/HomePage/OurPartners";
import ReachOut from "@/components/elements/HomePage/ReachOut";
import Certification from "@/components/elements/HomePage/Certification";
import StayInformed from "@/components/elements/HomePage/StayInformed";
import HappyCustomers from "@/components/elements/HomePage/HappyCustomers";
import ServicesHomepage from "@/components/elements/HomePage/ServicesHomepage";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <hr className="orangeLine" />
      <ServicesHomepage />
      <hr className="orangeLine" />
      <WhoWeAreSection />
      <VidoeoSection />
      <IndustriesWeServeSecion />
      <hr className="orangeLine" />
      <OurLeadershipTeam />
      <OurPartnersSection />
      <ReachOut />
      <Certification />
      <StayInformed />
      <hr className="orangeLine" />
      <h1 className="orangeText text-center pt-5">Join our happy customers!</h1>
      <HappyCustomers />
    </div>
  );
}
