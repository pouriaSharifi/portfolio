import Navbar from "./Navbar";
import Footer from "./Footer";

const index = ({ children }:any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
