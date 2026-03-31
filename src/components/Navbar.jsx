import { Phone, Mail, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { ROUTES } from "../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const { openDrawer } = useAppContext();
    const navigate = useNavigate();
    const location = useLocation();
    
    const scrollToMission = () => {
        if (location.pathname === '/') {
            document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => {
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })
            }, 300)
        }
    }
    
    const scrollToFacilities = () => {
        if (location.pathname === '/') {
            document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => {
                document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })
            }, 300)
        }
    }

    return (
        <div className="grid m-6 grid-row-2">
            <div className="hidden grid-cols-2 px-16 py-2 text-sm text-gray-600 md:grid">
                <div className="flex items-start gap-8">
                    <span className="flex items-center justify-center gap-2 font-semibold">
                        <Phone size={16} color="#4a9c59" />
                        +91 8606071078
                    </span>
                    <span className="flex items-center justify-center gap-2 font-semibold">
                        <Mail size={16} color="#4a9c59" />
                        shamsulhudaacademy@yahoo.com
                    </span>
                </div>

                <div className="flex items-center justify-end gap-4">
                    {/* <Facebook size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" />
                    <Youtube size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" />
                    <Instagram size={16} className="text-gray-500 hover:text-[#4a9c59] cursor-pointer" /> */}
                </div>
            </div>
            <div className="flex items-center justify-between py-1 md:px-16">
                
                <div className="w-36">
                    <img src="/src/assets/images/shia-logo-j (1).png" alt="" />
                </div>

                <div className="justify-between hidden gap-6 text-lg font-medium lg:flex">
                    <Link to={ROUTES.HOME} className="text-gray-600 hover:text-[#4A9C59] transition-colors">Home</Link>
                    <Link onClick={scrollToMission} className="text-gray-600 hover:text-[#4A9C59] transition-colors">Mission</Link>
                    <Link onClick={scrollToFacilities} className="text-gray-600 hover:text-[#4A9C59] transition-colors">Facilities</Link>
                    <div className="relative group">
                        <span className="cursor-pointer text-gray-600 hover:text-[#4A9C59]">
                            Activities
                        </span>
                        <div className="absolute left-0 z-10 hidden bg-white border-gray-100 rounded-md shadow-md top-full min-w-max group-hover:block">
                            <Link to={ROUTES.EVENTS} className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:text-[#4A9C59]">Events</Link>
                            <Link to={ROUTES.ACTIVITIES} className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:text-[#4A9C59]">Activities</Link>
                        </div>
                    </div>
                    <Link to={ROUTES.FACULTIES} className="text-gray-600 hover:text-[#4A9C59] transition-colors">Faculties</Link>
                    <Link to={ROUTES.MANAGEMENT} className="text-gray-600 hover:text-[#4A9C59] transition-colors">Management</Link>
                    <Link to={ROUTES.ABOUT} className="text-gray-600 hover:text-[#4A9C59] transition-colors">About</Link>
                </div>

                <div className="">
                    <Link to={ROUTES.DONATE}>
                    <button
                        className="hidden lg:block bg-[#4A9C59] px-6 py-2 rounded-lg text-white active:scale-95 hover:bg-green-600" 
                    >
                        Donate
                    </button>
                    </Link>
                    <button
                        onClick={openDrawer}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#4A9C59] hover:bg-gray-100 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>        
        </div>
    )
}