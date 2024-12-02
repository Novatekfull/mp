import { useState } from 'react';

const Gallery = () => {
  const categories = [
    "Tous",
    "Panneaux Composites",
    "Débroussaillage",
    "Jardins",
  ];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const projects = [
    {
      category: "Panneaux Composites",
      image: "/Assets/Img/img-jardin/Haie-avant-1.jfif",
      title: "Avant",
    },
    {
      category: "Panneaux Composites",
      image: "/Assets/Img/img-jardin/Haie-après-1.jfif",
      title: "Après",
    },
    {
      category: "Débroussaillage",
      image: "/Assets/Img/img-jardin/bute-avant-1.jpg",
      title: "Avant",
    },
    {
      category: "Débroussaillage",
      image: "/Assets/Img/img-jardin/bute-après-1.jpg",
      title: "Après",
    },
    {
      category: "Jardins",
      image: "/Assets/Img/img-jardin/Haie-1.png",
      title: "Taille de Haie",
    },
    {
      category: "Jardins",
      image: "/Assets/Img/img-jardin/gazon-synth-après-1.jpg",
      title: "Aménagement",
    },
    // Ajoutez plus de projets ici
  ];

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos plus belles créations et laissez-vous inspirer pour
            votre prochain projet
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-lime-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
