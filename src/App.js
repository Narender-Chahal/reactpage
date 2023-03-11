import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynav from "./components/Mynav";
import Head1 from "./components/Head1";
import Secondsection from "./components/Secondsection";
import Featured from "./components/Featured";
import Ownjoy from "./components/Ownjoy";
import Owner from "./components/Owner";
import Missout from "./components/Missout";
import Asfeaturedin from "./components/Asfeaturedin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg_img bg_color ">
        <Mynav />
        <Head1 />
      </div>
      <Secondsection />
      <Featured />
      <Ownjoy />
      <Owner />
      <Missout />
      <Asfeaturedin />
      <Footer />
    </>
  );
}

export default App;
