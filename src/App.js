import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRouter";
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;