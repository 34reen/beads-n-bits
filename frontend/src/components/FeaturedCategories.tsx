// src/components/FeaturedCategories.tsx
export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Luxury Necklaces",
      description: "Elegant pieces that make a statement",
      icon: "💎",
      bgGradient: "from-purple-50 to-pink-50",
      circleGradient: "from-purple-400 to-pink-400",
      textColor: "text-purple-800",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      buttonText: "Explore"
    },
    {
      id: 2,
      name: "Charming Bracelets",
      description: "Delicate designs for everyday wear",
      icon: "✨",
      bgGradient: "from-blue-50 to-teal-50",
      circleGradient: "from-blue-400 to-teal-400",
      textColor: "text-blue-800",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      buttonText: "Explore"
    },
    {
      id: 3,
      name: "Elegant Earrings",
      description: "Sparkling accents for every occasion",
      icon: "🌟",
      bgGradient: "from-pink-50 to-rose-50",
      circleGradient: "from-pink-400 to-rose-400",
      textColor: "text-pink-800",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      buttonText: "Explore"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">
          Featured Collections
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of exquisite jewelry pieces crafted with precision and passion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer`}
            >
              <div className={`w-32 h-32 bg-gradient-to-r ${category.circleGradient} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{category.icon}</span>
              </div>
              <h3 className={`text-xl font-semibold ${category.textColor} mb-3`}>
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <button className={`${category.buttonColor} text-white px-6 py-2 rounded-full transition`}>
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}