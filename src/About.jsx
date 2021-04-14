import Common from "./Common";
import svg_img from "../src/images/intro.svg";

function About() {
  return (
    <>
      <Common
        text1="Welcome to the About page of "
        text2="Feel Free to Contact with us."
        imgsrc={svg_img}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
}

export default About;
