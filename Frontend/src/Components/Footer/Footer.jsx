import React from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, QrCode } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-2">
        <div className="md:flex md:justify-between md:items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="w-28 h-28 bg-gray-600 rounded-2xl flex flex-col items-center justify-center shadow-md">
                <div className="flex items-center gap-1">
                  <QrCode size={22} className="text-green-400" />
                  <UtensilsCrossed size={22} className="text-blue-400" />
                </div>
                <h1 className="text-lg font-bold mt-1">
                  <span className="text-green-400">Scan</span>
                  <span className="text-white">&</span>
                  <span className="text-blue-400">Dine</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 text-sm">
            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Contact Us
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Scan&Dine
                  </a>
                </li>
                <li></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium space-y-2">
                <li>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-2 border-gray-200" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Scan&Dine
            </a>{" "}
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
