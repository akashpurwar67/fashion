import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

function App() {
  const whatsappNumber = '7310041791'; // Replace with your number
  const instagramHandle = 'SOCIALSELLING_CLOTH'; // Replace with your handle

  const products = [
    {
      name: "Black & white Kurta suits set",
      description: "100% organic cotton with custom prints",
      image: "WhatsApp Image 2025-06-18 at 5.18.10 PM.jpeg",
    },
    {
      name: "Juniper women fit and hare yellow gown",
      description: "Cozy winter collection with unique designs",
      image: "WhatsApp Image 2025-06-18 at 5.18.35 PM.jpeg",
    },
    {
      name: "White embroi Crop top & Pants set",
      description: "Comfortable and stylish denim collection",
      image: "WhatsApp Image 2025-06-18 at 5.18.57 PM.jpeg",
    },
    {
      name: "Gulmohar pink printed cotton gown with organza dupatta",
      description: "Lightweight and breathable for hot days",
      image: "WhatsApp Image 2025-06-18 at 5.19.31 PM.jpeg",
    },
    {
      name: "Women pure cotton kurta pant dupatta set",
      description: "Timeless outerwear for any occasion",
      image: "WhatsApp Image 2025-06-18 at 5.20.46 PM.jpeg",
    },
    {
      name: "Indo western top and pant set",
      description: "Performance clothing for active lifestyles",
      image: "WhatsApp Image 2025-06-18 at 5.21.49 PM.jpeg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Urban Threads</h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">Premium Ethnic Wear for the Modern Lifestyle</p>
          
          {/* Address */}
          <div className="flex items-center justify-center mb-8">
            <FaMapMarkerAlt className="mr-2 text-gray-300" />
            <p className="text-gray-300">83A/25 Juhi, Basanti Nagar, Kanpur</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mt-8">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl" />
            </a>

            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Collection</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-80 bg-gray-50 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 font-light">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-12">
                <div className="text-center">
                  <FaLeaf className="text-6xl text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Fashion</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Ethically sourced materials and environmentally conscious production
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About Urban Threads</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We create premium ethnic wear that blends traditional craftsmanship with contemporary designs. 
                  Each piece in our collection is thoughtfully designed to offer comfort without compromising on style.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of Kanpur, we take pride in our attention to detail and commitment to 
                  quality. Our fabrics are carefully selected to ensure durability and comfort for everyday wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 rounded-2xl text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
          }}></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us Today</h2>
            <div className="flex flex-col items-center mb-8">
              <FaMapMarkerAlt className="text-3xl mb-4 text-gray-300" />
              <p className="text-xl opacity-90">83A/25 Juhi, Basanti Nagar, Kanpur</p>
            </div>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Connect with us to explore our collection and discover perfect ethnic wear for every occasion
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-medium">Message on WhatsApp</span>
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-medium">Follow on Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Urban Threads</h3>
            <p className="text-gray-400">Premium Ethnic Wear</p>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-gray-400" />
              <p className="text-gray-400">83A/25 Juhi, Basanti Nagar, Kanpur</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Urban Threads. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
