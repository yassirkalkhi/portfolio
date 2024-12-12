import React, { useEffect } from "react";
import { useActiveLink } from "../Context/ActiveLinkContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Home = () => {
 const {wichLink,setLink} = useActiveLink()
 useEffect(() => {
  setLink("home")
 }, [wichLink])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
