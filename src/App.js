import './scss/App.scss';
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Main from "./modules/Main/Main";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
