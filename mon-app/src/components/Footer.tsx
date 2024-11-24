
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram,  } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img
                  src="/Assets/Img/logo-3-2-removebg-preview-white.png"
                  alt="Logo de l'entreprise paysagiste"
                  title="Retour à l'accueil"
                  loading="lazy"
                  className="w-[40%] flex  justify-center  rounded-lg"
                ></img>
              </Link>
            </div>
            <p className="text-gray-400">
              Créons ensemble des espaces verts qui vous ressemblent
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-lime-500" />
                <span>06 84 40 35 77</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-lime-500" />
                <span> paysage.maillard@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-lime-500" />
                <span>01160 Priay</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-lime-500">
                Accueil
              </Link>
              <Link to="/about" className="block hover:text-lime-500">
                À propos
              </Link>
              <Link to="/services" className="block hover:text-lime-500">
                Services
              </Link>
              <Link to="/gallery" className="block hover:text-lime-500">
                Galerie
              </Link>
              <Link to="/contact" className="block hover:text-lime-500">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-moi </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/487891254633444/user/61556450925265/?locale=fr_FR"
                className="hover:text-lime-500"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/maillard.paysage/?hl=fr"
                className="hover:text-lime-500"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Maillard Paysage. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
