import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="drawer z-30">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* NAVBAR */}
        <div className="navbar shadow-sm grid grid-cols-3 items-center">

          {/* KOLOM 1 — KIRI */}
          <div className="justify-self-start">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                className="h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* KOLOM 2 — TENGAH */}
          <div className="justify-self-center">
            <img
              src="/images/logo.png"
              alt="Mony Flower Logo"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
          </div>
          

        </div>

      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full bg-base-200 text-base-content flex flex-col">

          {/* HEADER / BRAND */}
          <div className="p-4 text-l font-bold border-b border-base-300 flex items-center gap-2">
            <img src="/images/logo.png" alt="Mony Flower Logo" className="w-10 h-10 object-contain" />
            <span>Mony Flower</span>
          </div>

          {/* MENU */}
          <ul className="menu p-4 flex-1 gap-3">
            <li>
              <a className="active">
                <FaHome className="h-6 w-6" />
                Dashboard
              </a>
            </li>

            <li>
              <a>
                <GiFlowerPot className="h-6 w-6" />
                Produk
              </a>
            </li>

            <li>
              <a>
                <IoIosSettings className="h-6 w-6" />
                Settings
              </a>
            </li>
          </ul>


        </aside>
      </div>


    </div>

  );
}


