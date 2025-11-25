// src/components/FeaturedCategories.tsx

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Luxury Necklaces",
      description: "Elegant pieces that make a statement",
      image: "/images/necklaces.jpg",
      bgColor: "bg-[#EAD9CC]",
      textColor: "text-[#4C3F39]",
      buttonColor: "bg-[#B48F76] hover:bg-[#8C7468]",
    },
    {
      id: 2,
      name: "Charming Bracelets",
      description: "Delicate designs for everyday wear",
      image: "/images/bracelets.jpg",
      bgColor: "bg-[#F7F3EF]",
      textColor: "text-[#4C3F39]",
      buttonColor: "bg-[#C1A08E] hover:bg-[#A68A7C]",
    },
    {
      id: 3,
      name: "Elegant Earrings",
      description: "Sparkling accents for every occasion",
      image: "/images/earrings.jpg",
      bgColor: "bg-[#D9B7A0]",
      textColor: "text-[#4C3F39]",
      buttonColor: "bg-[#B48F76] hover:bg-[#8C7468]",
    },
  ];

  return (
    <section className="py-16 bg-[#F7F3EF]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-4 text-[#4C3F39]">
          Featured Collections
        </h2>

        <p className="text-[#6A554A] text-center mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of exquisite jewelry pieces crafted with precision and passion
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-t-[90px] rounded-b-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
            >

              {/* IMAGE AREA */}
              <div className="w-full h-48 rounded-t-[80px] overflow-hidden mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT CONTENT */}
              <h3 className={`text-xl font-semibold ${category.textColor} mb-3`}>
                {category.name}
              </h3>

              <p className="text-[#6A554A] mb-4">
                {category.description}
              </p>

              <button
                className={`${category.buttonColor} text-white px-6 py-2 rounded-full transition`}
              >
                Explore
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
