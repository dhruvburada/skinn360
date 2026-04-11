import { MapPin, Phone, Clock, Instagram, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/data';

/**
 * LocationBook - Contact information and location section
 */
const LocationBook = () => {
  return (
    <section id="location-book" className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-[100px] top-0 left-0" />
          <div className="absolute w-96 h-96 bg-rose-500 rounded-full blur-[100px] bottom-0 right-0" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2">
          <div className="p-12 md:p-16 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Visit Our Clinic</h2>
            <p className="text-gray-300 text-lg">Ready to transform your skin? Book an appointment today and start your journey to radiance.</p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-400 shrink-0 mt-1" />
                <p className="text-gray-300">
                  {CONTACT_INFO.address} <br />
                  {CONTACT_INFO.city}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400 shrink-0" />
                <p className="text-gray-300">{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400 shrink-0" />
                <p className="text-gray-300">{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-yellow-400 shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>{CONTACT_INFO.morningHours}</p>
                  <p>{CONTACT_INFO.eveningHours}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="text-yellow-400 shrink-0" />
                <p className="text-gray-300">{CONTACT_INFO.instagram}</p>
              </div>
            </div>

            <div className="pt-8">
              <button className=" flex items-center gap-2 w-full md:w-auto px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <PhoneCall size={16} />
                <a href="tel:+919586412805">Book Appointment Now</a>
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-auto bg-gray-800 group overflow-hidden">
            {/* Embedded Map */}
            <iframe
              src={CONTACT_INFO.mapUrl}
              width="100%"
              height="100%"
              className="w-full h-full transition-all duration-700 filter grayscale invert-[.9] group-hover:grayscale-0 group-hover:invert-0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBook;

