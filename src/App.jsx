import { FaWhatsapp, FaInstagram, FaTshirt, FaSnowflake, FaFire, FaLeaf } from 'react-icons/fa';
import { GiClothes, GiRunningShoe } from 'react-icons/gi';

function App() {
  const whatsappNumber = '7081674245'; // Replace with your number
  const instagramHandle = '_akka.81'; // Replace with your handle

  const products = [
    {
      name: "Premium kurta",
      description: "100% organic cotton with custom prints",
      image: "WhatsApp Image 2025-06-18 at 5.18.10 PM.jpeg",
      
    },
    {
      name: "Designer kurta",
      description: "Cozy winter collection with unique designs",
      image: "WhatsApp Image 2025-06-18 at 5.18.35 PM.jpeg",
      
    },
    {
      name: "Casual kurta",
      description: "Comfortable and stylish denim collection",
      image: "WhatsApp Image 2025-06-18 at 5.18.57 PM.jpeg",
     
    },
    {
      name: "Summer kurta",
      description: "Lightweight and breathable for hot days",
      image: "WhatsApp Image 2025-06-18 at 5.19.31 PM.jpeg",
      
    },
    {
      name: "Classic Kurta",
      description: "Timeless outerwear for any occasion",
      image: "WhatsApp Image 2025-06-18 at 5.20.46 PM.jpeg",
      
    },
    {
      name: "Athletic Kurta",
      description: "Performance clothing for active lifestyles",
      image: "WhatsApp Image 2025-06-18 at 5.21.49 PM.jpeg",
      
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Urban Threads</h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">Premium Clothing for the Modern Lifestyle</p>

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
            <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative h-72 bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full p-4"
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 font-light">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20 text-center bg-white rounded-xl shadow-lg p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Our Brand</h2>
            <div className="flex justify-center mb-8">
              <FaLeaf className="text-4xl text-green-500" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We create sustainable, high-quality clothing that combines comfort with style.
              Each piece is carefully designed to reflect urban culture while maintaining
              environmental responsibility. Our fabrics are ethically sourced and our
              production processes minimize environmental impact.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 rounded-2xl text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
          }}></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Wardrobe?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Connect with us on social media to see our latest collections and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-medium">Chat on WhatsApp</span>
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
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} Urban Threads. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Sustainable fashion for a better tomorrow</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
