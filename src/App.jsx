import Navbar from "./components/navbar";
import About from "./components/about";
import SecondBanner from "./components/secondBanner";
import Designer from "./components/designer";
import Glide from "./components/glide";
import HowWork from "./components/howWork";
import Reviews from "./components/reviews";
import Form from "./components/form";
import Footer from "./components/footer";
import UtilsAndLanguages from "./components/utilsAndLanguages";
import ContactMe from "./components/contactMe";
import ContactMeTwo from "./components/contactMeTwo";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <SecondBanner />
      <Designer />
      <UtilsAndLanguages />
      <Glide />
      <ContactMe />
      <HowWork />
      <ContactMeTwo />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
