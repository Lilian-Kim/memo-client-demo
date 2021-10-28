import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import MemoWrapper from "./components/MemoWrapper";

function App() {
  return (
    <div className="App" style={{ height: "100vh " }}>
      <Header />
      <Main>
        <MemoWrapper />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
