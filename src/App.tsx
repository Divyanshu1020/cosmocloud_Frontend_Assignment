import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="p-5 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
