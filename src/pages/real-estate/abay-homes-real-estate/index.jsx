import Head from "next/head";
import ResponsiveAppBar from "@/components/Home/Menubar";
import TopAddressBar from "@/components/Home/TopAddress";
import { useStore } from "@/Context/store";
import Footer from "@/components/Home/Footer";
import RealEstateIntro from "./components/RealEstateIntro";
import ProjectList from "./components/ProjectList";
import Projects from "@/components/Home/Projects";

function RealEstate() {
  const { user } = useStore();
  return (
    <>
      <Head>
        <title>Rise Addis Realestate</title>
        <meta
          name="description"
          content="The best Realestate Agency to buy appartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main>
        <TopAddressBar />
        <ResponsiveAppBar user={user} type={"/real-estate"} />
        <RealEstateIntro />
        <ProjectList />
        <Projects title={"Other Projects"} />
        <Footer />
      </main>
    </>
  );
}

export default RealEstate;
