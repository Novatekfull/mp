import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[80vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Créons ensemble votre jardin de rêve
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expertise et passion au service de vos espaces verts
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-lime-500 text-white px-8 py-3 rounded-md hover:bg-lime-500 transition-colors"
            >
              Demandez un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Création de jardins",
                image:
                  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Entretien paysager",
                image:
                  "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Aménagement extérieur",
                image:
                  "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce que disent mes clients sur Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                text: "J'utilise les services de Gregory depuis quelques temps, et je suis très satisfait. Ponctuel et efficace, tant pour la tonte de pelouse, d’herbes, de mauvaises herbes ou même de ronces. Il est aussi parfait pour la taille des haies de toutes sortes.",
                author: "Frédéric V.",
              },
              {
                text: "Efficace et très professionnel. Travail propre et soigné. Je recommande.",
                author: "Karine L.",
              },
              {
                text: "M. Maillard a fait un excellent travail lors du réaménagement de mon jardin. À l'écoute de ma demande, son professionnalisme a fait le reste. Je recommande.",
                author: "'tnosngl'",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              >
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="text-lime-500 font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
