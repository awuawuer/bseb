// App.js
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import RecentPosts from './Components/RecentPosts/recentPosts';
import OurServices from './Components/ourServices/ourServices';
// import NewsAndEvents from './Components/newsAndEvent/newsAndEvents';
import Footer from './Components/Footer/Footer';
// import NewsAndEvents from './Components/newsAndEvent/newsAndEvents';
//import BlogPostCard from './Components/BlogPostCard/BlogPostCard';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RecentPosts />
       <OurServices /> 
      {/* <NewsAndEvents /> */}
     <Footer />
    </div>
  );
}

export default App;