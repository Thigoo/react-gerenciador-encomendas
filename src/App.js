import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRouter";
import SideBar from "./components/SideBar";
import './styles/global.css'
function App() {
  return (
    <div className={'container'}>
    <BrowserRouter>
      <SideBar />
      <AppRoute />
    </BrowserRouter>
    </div>
  );
}

export default App;