import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import RecentPosts from "../Components/RecentPosts/recentPosts";
import OurServices from "../Components/ourServices/ourServices";
import NewsAndEvents from "../Components/newsAndEvent/newsAndEvents";
import ManagementTeam from "../Components/ManagementTeam/managementTeam";

function Home() {
  return (
    <>
      <HeroSection />
      <RecentPosts />
      <OurServices />
      <NewsAndEvents />
      <ManagementTeam />
    </>
  );
}

export default Home;
