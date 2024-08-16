import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Logo } from "./components/Logo/Logo";
import { LandingPage } from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header>
        <Nav></Nav>
        <Logo></Logo>
      </Header>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
