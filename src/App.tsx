import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./sass/main.scss";
import { store } from "./redux/store";

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
    <Provider store={store}>
      <GlobalStyle />
      <main className="main-container">
        <Dashboard />
      </main>
    </Provider>
  );
}

export default App;
