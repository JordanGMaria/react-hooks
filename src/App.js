import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
