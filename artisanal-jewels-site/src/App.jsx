
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">Artisanal Jewels</div>
    <div className="space-x-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/products" className="hover:underline">Products</Link>
      <Link to="/custom" className="hover:underline">Custom Design</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Premium Diamonds & Fine Jewelry</h1>
    <p className="text-lg max-w-2xl mx-auto">
      Welcome to Artisanal Jewels – Melbourne's trusted source for GIA-certified diamonds,
      18K gold jewelry, and custom-crafted designs. Explore our timeless collections.
    </p>
  </div>
);

const About = () => (
  <div className="p-8 max-w-3xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
    <p>
      Founded by Dhruvil Savani, Artisanal Jewels is a Melbourne-based jewelry brand
      committed to ethical sourcing, precision craftsmanship, and elegant design.
      Our products are GIA-certified, and our gold pieces are made from premium 18K gold.
    </p>
  </div>
);

const Products = () => (
  <div className="p-8">
    <h2 className="text-3xl font-semibold mb-6 text-center">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        title="GIA-Certified Diamonds"
        description="Brilliant cuts, ethically sourced."
        image="https://source.unsplash.com/featured/?diamond"
      />
      <ProductCard
        title="18K Gold Jewelry"
        description="Elegant necklaces, rings, and earrings."
        image="https://source.unsplash.com/featured/?gold,jewelry"
      />
      <ProductCard
        title="Bridal Sets"
        description="Exquisite bridal collections for special moments."
        image="https://source.unsplash.com/featured/?wedding,jewelry"
      />
    </div>
  </div>
);

const ProductCard = ({ title, description, image }) => (
  <div className="border p-4 rounded-2xl shadow hover:shadow-lg transition">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const CustomDesign = () => (
  <div className="p-8 max-w-3xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Custom Jewelry Design</h2>
    <p>
      Looking for something truly unique? Our custom design service allows you to create bespoke
      pieces that reflect your style and vision. Work with our expert designers to bring your
      dream jewelry to life.
    </p>
  </div>
);

const Contact = () => (
  <div className="p-8 max-w-md mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
    <p className="mb-4">Have questions or want to see our catalog? We’d love to hear from you!</p>
    <form action="https://formspree.io/f/xrbpokrp" method="POST" className="space-y-4">
      <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" required></textarea>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send Message</button>
    </form>
    <div className="mt-6 text-sm">
      📞 +61 451 565 356 <br />
      📍 Melbourne, VIC <br />
      📧 dhruvilsavani123@gmail.com
    </div>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/custom" element={<CustomDesign />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
