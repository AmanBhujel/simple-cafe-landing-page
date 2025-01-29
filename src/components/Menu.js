import { useState } from 'react';
import Modal from './Modal';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuCategories = [
  
    {
      title: "Cafe Mocha",
      image: "/CafeMocha.jpg",
      menuImage: "/CafeMocha.jpg"
    },
    {
      title: "Ramen",
      image: "/Ramen.jpg",
      menuImage: "/Ramen.jpg"
    },
    {
      title: "Non-Espresso Drinks",
      image: "/Non-Espresso.jpg",
      menuImage: "/Non-Espresso.jpg"
    },
    {
      title: "Shakes & Blends",
      image: "/Shakes.jpg",
      menuImage: "/Shakes.jpg"
    },
    {
      title: "Smoke",
      image: "/Smoke.jpg",
      menuImage: "/Smoke.jpg"
    },
    {
      title: "Tit Bits",
      image: "/TitBits.jpg",
      menuImage: "/TitBits.jpg"
    },
    {
      title: "Bubble Tea",
      image: "/BubbleTea.jpg",
      menuImage: "/BubbleTea.jpg"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedMenu(category)}
            className="cursor-pointer group"
          >
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-4">
                  {category.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedMenu}
        onClose={() => setSelectedMenu(null)}
      >
        {selectedMenu && (
          <div>
            <img
              src={selectedMenu.menuImage}
              alt={selectedMenu.title}
              className="w-full max-h-screen object-contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Menu; 