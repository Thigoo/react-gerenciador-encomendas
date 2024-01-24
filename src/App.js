import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import AppRoute from "./routes/AppRouter";

function App() {
  return (
    <>
    <BrowserRouter>
      <SideBar />
      <AppRoute />
    </BrowserRouter>
    </>
  );
}

export default App;