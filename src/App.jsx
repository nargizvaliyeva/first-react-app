import "./index.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import HomePage from "./pages/home";
import { AiFillPushpin } from "react-icons/ai";

import Info from "./pages/Info/main";

function App() {
  return (
    <>
      <Header />
      <HomePage />
        <Info />
      <Footer />
    </>
  );
}

export default App;
