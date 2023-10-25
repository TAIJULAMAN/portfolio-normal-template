// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import { FaBeer } from "react-icons/fa";
import logo from "../assets/Images/aman.png";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Features", href: "/#features" },
  { name: "Protfolio", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="custom-bg sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:px-2">
            <div className="relative flex items-center  justify-between mt-2 mx-3 ">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaBeer
                      className="block h-6 w-6"
                      aria-hidden="true"
                    ></FaBeer>
                  ) : (
                    <FaBeer
                      className="block h-6 w-6"
                      aria-hidden="true"
                    ></FaBeer>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex  items-center  justify-center sm:items-stretch sm:justify-center lg:justify-between md:justify-between">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    className="hidden lg:block rounded-full mr-2 inner-shadow  h-16 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <h2 className="font-bold text-xl   px-2 py-1">
                    MD.Shah Aman
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" lg:block md:block hidden ">
                    <div className="flex items-center justify-center space-x-4">
                      {navigation.map((item) => (
                        <HashLink
                          key={item.name}
                          to={item.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-normal "
                        >
                          {item.name}
                        </HashLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block md:hidden lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <HashLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 text-center hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
