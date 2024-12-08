import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BackImage from "../components/BackImage";

function Home() {
  return (
    <div className="bg-bg relative">
      <BackImage />
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
