import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./sass/main.scss";
import { store } from "./redux/store";
import SplashScreen from "./pages/SplashScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }

  p, span, h1, h2, h3, h4, h5,h6{
    margin: 0;
  }
`;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
