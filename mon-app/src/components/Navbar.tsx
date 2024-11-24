import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-100% ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[100%] py-2">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/Assets/Img/logo-3-2 rognage.png"
                alt="Logo de l'entreprise paysagiste"
                title="Retour à l'accueil"
                loading="lazy"
                className="w-[35%] flex  justify-center"
              ></img>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-5 px-20 justify-between">
            <Link
              to="/"
              className="text-gray-600 font-semibold  hover:text-lime-500 w-20 flex  justify-center"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-gray-600 font-semibold hover:text-lime-500 w-20 flex  justify-center"
            >
              À propos
            </Link>
            <Link
              to="/services"
              className="text-gray-600 font-semibold hover:text-lime-500 w-20 flex  justify-center"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-gray-600 font-semibold hover:text-lime-500 w-20 flex  justify-center"
            >
              Galerie
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 font-semibold  hover:text-lime-500 w-20 flex  justify-center"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-lime-500 text-white font-semibold px-10 py-2 rounded-md hover:bg-lime-600 mx-5 w-60 flex  justify-center"
            >
              Devis gratuit
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-lime-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-lime-500"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-lime-500"
            >
              À propos
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-lime-500"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 text-gray-600 hover:text-lime-500"
            >
              Galerie
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-lime-500"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-500"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
