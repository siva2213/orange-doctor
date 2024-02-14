import "./App.css";
import Header from "./views/header/Header";
import Content from "./views/content/Content";
import Footer from "./views/footer/Footer";
import Scroll from "./components/scroll/Scroll";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
