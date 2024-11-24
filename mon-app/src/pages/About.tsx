import { Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mon Histoire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            C'est avant tout une passion : depuis plus de 15 ans, j'ai eu la
            chance de transformer des espaces extérieurs en véritables havres de
            paix, uniques et personnalisés.
          </p>
        </div>

        {/* Image and Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/Assets/Img/img-jardin/Haie-2.png"
            alt="Notre équipe au travail"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ma Passion
            </h2>
            <p className="text-gray-600 mb-4">
              Mon entreprise est née d'une passion profonde pour l'art du
              paysage et le respect de la nature. Je crois que chaque espace
              extérieur a le potentiel de devenir un lieu unique de détente et
              de bien-être.
            </p>
            <p className="text-gray-600">
              Fort de 15 ans d'expérience dans le domaine, je me suis lancé en
              tant qu'indépendant pour transformer vos espaces extérieurs. Que
              ce soit pour l'entretien de vos jardins ou la création
              d'aménagements paysagers sur mesure, je mets tout mon savoir-faire
              à votre service pour sublimer vos extérieurs.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Award className="h-12 w-12 text-green-600" />,
              title: "15+ ans d'expérience",
              description: "D'expertise dans l'aménagement paysager",
            },
            {
              icon: <Users className="h-12 w-12 text-green-600" />,
              title: "50+ clients satisfaits",
              description: "Qui nous font confiance",
            },
            {
              icon: <Clock className="h-12 w-12 text-green-600" />,
              title: "50+ projets réalisés",
              description: "À travers toute la Région Rhône-Alpes",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Présentation
          </h2>
          <div className="flex content-center justify-center  md:flex text-center  ">
            {[
              {
                name: "Gregory Maillard ",
                role: "Gérant",
                image: "/Assets/Img/Profil.png",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
