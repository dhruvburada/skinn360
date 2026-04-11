import { FluidBackground } from './FluidBackground';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = ({ children }) => (
  <div className="bg-orange-50/30 min-h-screen text-gray-800 font-sans selection:bg-yellow-200 selection:text-yellow-900">
    <FluidBackground />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);
