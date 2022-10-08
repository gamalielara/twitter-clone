import { createGlobalStyle } from "styled-components";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { MainContainer } from "./styledComponents/containers";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }

  p, span, h1, h2, h3, h4, h5,h6{
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Dashboard />
      </MainContainer>
    </>
  );
}

export default App;
