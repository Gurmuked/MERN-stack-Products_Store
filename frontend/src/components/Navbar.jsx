import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {CiSquarePlus} from 'react-icons/ci';
import {IoSunnyOutline} from 'react-icons/io5';
import { BsMoonStars } from "react-icons/bs";
import { useColorMode } from '../ColorModeContext';


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <section className={`max-w-[1140px] px-4 h-[16px] mx-auto `}>
      <div className="flex justify-between flex-column sm:flex-row items-center h-full w-full py-4">
        <Link to= {"/"}  className="flex flex-row text-[22px] sm:text-[28px] font-bold uppercase text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          <span >products store</span>
          <span><FaShoppingCart /></span>
        </Link>

        <div>
          <Link to={"/create"} className="flex flex-row gap-4 items-center">
            <button>
              <CiSquarePlus className="text-[20px]"/>
            </button>
            <button onClick={toggleColorMode}>
              {colorMode ? (<BsMoonStars className="text-[20px] rotate-[260deg] text-yellow-500"/> ): (<IoSunnyOutline className="text-[20px]"/>)}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar;