import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="px-4 py-12 text-gray-300 bg-gray-900 ">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">

          <div className="md:col-span-5">
            <img 
              src="/src/assets/images//shia-logo-j (1).png"
              alt="Logo"
              className="h-12 mb-4" 
            />
            <p className="text-sm text-gray-400">
              Shamsul Huda Islamic Academy , a graduate institute affiliated to Darul Huda Islamic University Kerala, is a prestigious centre of Islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing.
            </p>
          </div>

          <div className="md:col-start-7 md:col-span-2">
            <nav className="flex flex-col space-y-2">

              <h2 className="mb-4 font-semibold"></h2>
              <Link to="/about" className="hover:underline">Contact</Link>
              <Link to="/mission" className="hover:underline">Mission</Link>
              <Link to="/faculties" className="hover:underline">Faculties</Link>
              <Link to="/facilities" className="hover:underline">Facilities</Link>
              <Link to="/management" className="hover:underline">Management</Link>
            </nav>
          </div>

          <div className="md:col-start-10 md:col-span-2">
            <nav className="flex flex-col space-y-2">
                <h2 className="mb-4 font-semibold">Social Media</h2>
              <a href="#" className="hover:underline">Youtube</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Instagram</a>
            </nav>
          </div>
          
        </div>

        <div className="pt-8 mt-12 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            © All Right Reserved 2025.
          </p>
        </div>

      </div>
    </footer>
    )
}