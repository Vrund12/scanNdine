import React from 'react';

const menu = {
  Starters: [
    {
      name: 'Garlic Bread',
      desc: 'Toasted bread with garlic, butter, and herbs.',
      price: '$4.99',
      available: true,
      image: 'https://imgs.search.brave.com/cxGx7pEQypsG9i7ngpjiN1FqF-GL_UX6z0pqiqRwxU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb3V0/aGVybmJpdGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA5L0Jlc3QtR2Fy/bGljLUJyZWFkLTIu/anBn',
    },
    {
      name: 'Bruschetta',
      desc: 'Grilled bread topped with fresh tomatoes and basil.',
      price: '$5.49',
      available: false,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    },
  ],
  Mains: [
    {
      name: 'Margherita Pizza',
      desc: 'Classic pizza with fresh tomatoes and mozzarella.',
      price: '$9.99',
      available: true,
      image: 'https://imgs.search.brave.com/ckubvZvQ_kvJUne1oUFltvDWpVKG6P0xzoD-vNEZ8hQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGFzc2ljLW1h/cmdhcml0YS1waXp6/YS13aXRoLW1venph/cmVsbGEtdG9tYXRv/ZXMtYmFzaWwtaXRh/bGlhbi1waXp6YS1j/b21wb3NpdGlvbi13/aXRoLWluZ3JlZGll/bnRzLXdoaXRlLXRh/YmxlLXRvcC12aWV3/LWZvb2QtZmxhdC1s/YXlfMjA3MTI2LTIx/NzkuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA',
    },
    {
      name: 'Chicken Alfredo',
      desc: 'Creamy Alfredo pasta with grilled chicken.',
      price: '$12.49',
      available: true,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

const AdminMenu = () => {
  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">📋 Menu Overview</h2>

      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">{category}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border border-gray-200 shadow-md transition transform hover:scale-[1.01] ${
                  !item.available && 'opacity-60'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-md font-bold text-gray-800">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>

                  {!item.available && (
                    <p className="text-sm mt-2 text-red-600 font-medium">❌ Unavailable</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminMenu;
