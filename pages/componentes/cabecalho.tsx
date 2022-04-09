import Link from "next/link";
import { destroyCookie } from "nookies";
import { useEffect, useState } from "react";
import compraStore from "../../stores/compraStore";

export default function Cabecalho() {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <div className="bg-white  w-full absolute h-20 border-t-2 border-yellow-500"></div>

      <nav className="bg-white w-full flex relative justify-between items-center mx-auto container h-20 border-t-2 border-yellow-500">
        <div className="inline-flex">
          <Link href={"/home"}>
            <a className="_o6689fn">
              <div>
                <img className={"w-1/4"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WR24fnzSsiHf1TmpIWQn_E3qgJTLBcsK5w&usqp=CAU"} />
              </div>
            </a>
          </Link>
        </div>
        
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          
        <div className="px-5 bg-white">
            <div className="flex">
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-500">
                        <span className="block px-1">
                            <i className="far fa-home text-xl pt-1 mb-1 block"></i>
                            <span className="block text-sm pb-1">Home</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-500">
                        <span className="block px-1">
                            <i className="far fa-chart-line text-xl pt-1 mb-1 block"></i>
                            <span className="block text-sm pb-1">Trades</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-500">
                        <span className="block px-1">
                            <i className="far fa-bullhorn text-xl pt-1 mb-1 block"></i>
                            <span className="block text-sm pb-1">Market</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-500">
                        <span className="block px-1">
                            <i className="far fa-search text-xl pt-1 mb-1 block"></i>
                            <span className="block text-sm pb-1">Inspect</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-yellow-500 border-b-2 border-transparent group-hover:border-yellow-500">
                        <span className="block px-1">
                            <i className="far fa-coin text-xl pt-1 mb-1 block"></i>
                            <span className="block text-sm pb-1">Coins</span>
                        </span>
                    </a>
                </div>
            </div>
        </div> 
          
        </ul>
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
          
            <div className="block">
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu(!subMenu);
                  }}
                >
                  <div className="pl-4">Entrar</div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>

                <div className={subMenu ? "relative" : "relative hidden"}>
                  <div
                    className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl"
                    style={{ zIndex: "5" }}
                  >
                    <a
                      href="#"
                      className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-gray-200"
                    >
                      Conta
                    </a>
                    <div className="py-2">
                      <hr></hr>
                    </div>
                    <a
                      href="#"
                      className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-gray-200"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Sair
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
