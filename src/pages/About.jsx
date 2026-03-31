import { Mail, Phone, MapPin } from "lucide-react"

export default function About() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-16 mx-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="md:flex">
            <div className="relative h-64 md:w-1/2 md:h-auto">
              <img
                src="/src/assets/images/about.JPG"
                alt="Shamsul Huda Islamic Academy"
                className="absolute inset-0 object-cover w-full h-full"
              />

            </div>

            <div className="p-8 md:w-1/2">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">Shamsul Huda Islamic Academy</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <p className="text-gray-600">
                    Kuttikkattoor, Kozhikode
                    <br />
                    Kuttikkattoor PO
                    <br />
                    Kozhikode Distl.
                    <br />
                    Pin: 673008
                    <br />
                    Kerala, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <p className="text-gray-600">+91 0495 2351534</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <p className="text-gray-600">shamsulhudaacademy@yahoo.com</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="w-full h-64"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%&height=256&hl=en&q=Kuttikatoor, Shamsul Huda Islamic Academy&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}