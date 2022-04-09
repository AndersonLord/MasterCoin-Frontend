import { useState } from "react";

export default function Rodape(data: any) {
  return (
    <footer className="relative bg-blueGray-200 pb-6 pt-7 border-t-2 border-yellow-500">
      <div className="container mx-auto px-4">
        {/* <hr className="my-6 border-blueGray-300"/> */}
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span>
              <a
                href="https://www.instagram.com/andersonprofs/"
                className="text-blueGray-500 hover:text-gray-800"
              >
                {" "}
                @AndersonPROFS
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
