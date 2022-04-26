import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in gaming</title>
        <meta name="description" content="Kami menyediakan jutaaan cara untuk membantu pengalaman gamingmu" />
        <meta name="og:title" content="StoreGG - Get a New Experience in gaming" />
        <meta name="og:description" content="Kami menyediakan jutaaan cara untuk membantu pengalaman gamingmu" />
        <meta name="og:image:secure_url" content="https://ik.imagekit.io/0rdat3peflx/storegg_2fXmIig--.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650964666208" />
        <meta name="og:image" content="https://ik.imagekit.io/0rdat3peflx/storegg_2fXmIig--.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650964666208" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        {/* <meta name="og:image" content="Kami menyediakan jutaaan cara untuk membantu pengalaman gamingmu" />
        <meta name="og:url" content="Kami menyediakan jutaaan cara untuk membantu pengalaman gamingmu" /> */}
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
