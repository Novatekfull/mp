import { Link } from "react-router-dom";
import { Scissors, Trees, Mountain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Trees className="h-12 w-12 text-lime-500" />,
      title: "Création de jardins",
      description:
        "Conception et réalisation de jardins sur-mesure adaptés à vos envies et à votre espace.",
      features: [
        "Étude personnalisée",
        "Sélection des végétaux",
        "Installation complète",
      ],
    },
    {
      icon: <Scissors className="h-12 w-12 text-lime-500" />,
      title: "Entretien paysager",
      description:
        "Maintenance régulière de vos espaces verts pour garder votre jardin toujours impeccable.",
      features: ["Tonte de pelouse", "Taille de haies", "Désherbage"],
    },
    {
      icon: <Mountain className="h-12 w-12 text-lime-500" />,
      title: "Aménagement extérieur",
      description:
        "Création d'espaces de vie extérieurs pour profiter pleinement de votre jardin.",
      features: ["Terrasses", "Allées", "Murets", "Clôtures"],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes services d'aménagement paysager pour créer et
            entretenir votre espace extérieur idéal
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                  >
                    <span className="h-2 w-2 bg-lime-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre espace extérieur ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-moi pour un devis gratuit et personnalisé
          </p>
          <Link
            to="/contact"
            className="bg-lime-500 text-white font-semibold px-10 py-2 rounded-md hover:bg-lime-600 mx-5 w-60 flex  justify-center"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
