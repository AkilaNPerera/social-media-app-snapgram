import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//starting point of a react app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
  //<App /> tells react on which element the components should be rendered in.
  //Wrapping the App component within BrowserRouter enables it to control routing for the whole app component
);
