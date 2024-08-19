export default function Footer() {
  return (
    <footer className="mt-12 border-t border-blue-500 bg-blue-700">
      <div className="container mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">About all blue</h3>
          <p className="text-blue-200">
            Bringing you the finest blue clothing and accessories since 2024.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-200">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect With Us</h3>
          <ul className="space-y-2 text-blue-200">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-4 text-center text-blue-200 border-t border-blue-600">
        <p>&copy; 2024 all blue. All rights reserved.</p>
      </div>
    </footer>
  );
}
