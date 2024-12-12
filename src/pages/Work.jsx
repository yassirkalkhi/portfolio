import React ,{useEffect} from "react";
import { useActiveLink } from "../Context/ActiveLinkContext";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
const Work = () => {
  const {wichLink,setLink} = useActiveLink()
  useEffect(() => {
   setLink("work")
  }, [wichLink])
  return (
    <>
      <Header />
      <Projects />
      <Footer></Footer>
    </>
  );
};

export default Work;
