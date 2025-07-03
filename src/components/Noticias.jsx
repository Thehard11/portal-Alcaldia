import React from "react";

const noticias = [
  {
    title: "Iniciarán los trabajos de asfaltado de la Av. Independencia",
    preview: "La alcaldía anunció el inicio de los trabajos de asfaltado para mejorar la movilidad y seguridad vial en la Av. Independencia.",
    link: "#",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Implementan panel solar en el parque Mirador Sur",
    preview: "Se ha instalado un nuevo panel solar en el parque Mirador Sur para promover el uso de energías limpias en espacios públicos.",
    link: "#",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Nueva jornada de limpieza en la ciudad",
    preview: "Voluntarios y personal del ayuntamiento participaron en una jornada de limpieza para embellecer los espacios públicos.",
    link: "#",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
];

const Noticias = () => (
  <section className="w-full mx-auto my-12 px-2 md:px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-sans">Noticias</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {noticias.map((noticia, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-sm h-full w-full overflow-hidden"
        >
          <div className="w-full md:w-48 h-48 md:h-full flex-shrink-0">
            <img
              src={noticia.image}
              alt="Noticia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 font-sans">{noticia.title}</h3>
            <p className="text-gray-600 mb-4 font-sans text-base md:text-lg flex-1">{noticia.preview}</p>
            <a
              href={noticia.link}
              className="text-[#6798c3] font-semibold hover:underline mt-auto font-sans text-base md:text-lg"
            >
              Noticia ahora
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Noticias; 