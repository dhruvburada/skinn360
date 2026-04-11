import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-white py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="images/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <p className="text-gray-400 text-sm">© 2025 Skinn360 Gondal. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-gray-400 hover:text-yellow-600 text-sm">Privacy</a>
        <a href="#" className="text-gray-400 hover:text-yellow-600 text-sm">Terms</a>
      </div>
    </div>
  </footer>
);
