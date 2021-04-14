import Common from "./Common";

import svg_img from "../src/images/intro.svg";

function Home() {
  return (
    <>
      <Common
        text1="Grow your business with "
        text2="We are team of talented developer making websites"
        imgsrc={svg_img}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
}

export default Home;
