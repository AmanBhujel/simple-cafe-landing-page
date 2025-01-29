function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p>Imadol, Lalitpur</p>
            <p>Nepal</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <a 
                href="https://www.google.com/maps/place/The+Lost+Sip+Coffee+House/@27.6668778,85.3103105,14.33z/data=!4m6!3m5!1s0x39eb17d55b3156cd:0x27ec539fc6e49b7a!8m2!3d27.6611336!4d85.3439935!16s%2Fg%2F11lnbfd8hl?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-gray-300"
              >
                Find us on Google Maps
              </a>
              <a 
                href="https://www.instagram.com/thelostsip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-gray-300"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Open Daily</p>
            <p>7:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 