import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
function Footer() {
  return (
    <div>
      <footer className="px-4 divide-y bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-between py-16 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a href="#" className="flex items-center m-0 p-0">
              <Image
                src={logo}
                width={120}
                height={120}
                alt="Bisnexplore Logo"
                quality={100}
              />
            </a>
          </div>
          <div className="grid grid-cols-3 text-sm gap-x-20 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracki uppercase text-gray-50">General</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Investor relation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase text-gray-50">Solutions</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Product
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-gray-50">Others</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms & Condations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-400">
          © 2023 Bisnexplore Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
