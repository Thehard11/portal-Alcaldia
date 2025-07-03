import React from "react";

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 17V9m4 8V5m4 12v-4" />
      </svg>
    ),
    title: "Dashboard interactivo",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <ellipse cx="12" cy="7" rx="9" ry="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c0 2.21 4.03 4 9 4s9-1.79 9-4" />
      </svg>
    ),
    title: "Repositorio de Datos Públicos",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121m12.728 0l-2.121-2.121M6.757 6.757L4.636 4.636" />
      </svg>
    ),
    title: "API Pública",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Participación ciudadana",
  },
];

const FeatureCards = () => (
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center my-8">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-4 w-full max-w-xs md:max-w-sm transition-transform hover:scale-105 hover:shadow-md"
      >
        <div className="mr-4 flex-shrink-0">
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 font-sans">{feature.title}</h3>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureCards; 