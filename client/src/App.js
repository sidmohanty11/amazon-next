import "./App.css";
import CustomCarousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <CustomCarousel />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
