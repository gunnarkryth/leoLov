import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { LandingPage } from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
