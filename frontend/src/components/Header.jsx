import {Link} from "react-router-dom"
import { MdOutlineAddBox,  MdOutlineWbSunny } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Left side - Logo */}
      <Link
      to="/"
      className="text-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl flex items-center justify-center gap-2 hover:opacity-90 transition"
       >
          PRODUCT STORE
      </Link>

      {/* Right side - Icons */}
      <div className="flex items-center space-x-3">
        <Link to="/create" >
        <button className="p-2 rounded hover:bg-gray-800 transition">
          <MdOutlineAddBox size={18} />
        </button>
        </Link>
        <button className="p-2 rounded hover:bg-gray-800 transition">
          <MdOutlineWbSunny size={18} />
        </button>
      </div>
    </nav>
  );
}
