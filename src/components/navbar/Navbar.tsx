import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className=" h-full px-5 mx-auto max-w-[1380px] flex flex-row items-center gap-4 ">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
    </nav>
  );
}
