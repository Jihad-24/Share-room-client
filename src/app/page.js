import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollUp from "@/components/shared/Scroll/ScrollUp";
import ContactForm from "@/components/ui/ContactForm";
import LinkBanner from "@/components/ui/LinkBanner";
import NewService from "@/components/ui/NewService/NewService";
import OurTeams from "@/components/ui/OurTeams/OurTeams";
import Posts from "@/components/ui/Posts/Posts";
import Testimonials from "@/components/ui/Testimonials";
import Footer from "../components/shared/Footer";
import Banner from "../components/ui/Banner";
import CallUs from "../components/ui/CallUs";
import Parcel from "../components/ui/Parcel";
import { Providers } from "./providers/NextUIProviders";

const MainHome = () => {
  return (
    <Providers>
      <Navbar />
      <Banner />
      <LinkBanner />
      <Parcel />
      <NewService />
      <CallUs />
      <Posts />
      <ScrollUp />
      <OurTeams />
      <Testimonials />
      <ContactForm />
      <ScrollUp />
      <Footer />
    </Providers>
  );
};

export default MainHome;
