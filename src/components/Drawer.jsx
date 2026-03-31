import { X, Phone, Mail, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { ROUTES } from '../constants/routes'
import logo from '../assets/images/shia-logo-j (1).png'

export default function Drawer() {
    const { isDrawerOpen, closeDrawer } = useAppContext()
    const [activitiesOpen, setActivitiesOpen] = useState(false)

    const handleLink = () => {
        closeDrawer()
        setActivitiesOpen(false)
    }

    return (
        <>
            {/* overlay — clicking outside closes drawer */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
                    ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeDrawer}
            />

            {/* drawer panel */}
            <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 flex flex-col
                transition-transform duration-300 ease-in-out
                ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <img src={logo} alt="Logo" className="w-24" />
                    <button
                        onClick={closeDrawer}
                        className="p-1.5 rounded-md text-gray-500 hover:text-[#4A9C59] hover:bg-gray-100 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* nav links */}
                <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">

                    <Link to={ROUTES.HOME} onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        Home
                    </Link>

                    <Link to={ROUTES.ABOUT} onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        Mission
                    </Link>

                    <Link to='/' onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        Facilities
                    </Link>

                    {/* Activities dropdown */}
                    <div>
                        <button
                            onClick={() => setActivitiesOpen(prev => !prev)}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors"
                        >
                            Activities
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* sub links */}
                        <div className={`overflow-hidden transition-all duration-200
                            ${activitiesOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <Link to={ROUTES.EVENTS} onClick={handleLink}
                                className="block px-8 py-2 text-sm text-gray-600 hover:text-[#4A9C59] hover:bg-green-50 rounded-md transition-colors">
                                Events
                            </Link>
                            <Link to={ROUTES.ACTIVITIES} onClick={handleLink}
                                className="block px-8 py-2 text-sm text-gray-600 hover:text-[#4A9C59] hover:bg-green-50 rounded-md transition-colors">
                                Activities
                            </Link>
                        </div>
                    </div>

                    <Link to={ROUTES.FACULTIES} onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        Faculties
                    </Link>

                    <Link to={ROUTES.MANAGEMENT} onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        Management
                    </Link>

                    <Link to={ROUTES.ABOUT} onClick={handleLink}
                        className="px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-[#4A9C59] hover:bg-green-50 transition-colors">
                        About
                    </Link>

                    {/* donate button */}
                    <div className="pt-3">
                        <button className="w-full bg-[#4A9C59] text-white py-2.5 rounded-lg font-medium hover:bg-green-600 active:scale-95 transition-all">
                            Donate
                        </button>
                    </div>
                </nav>

                {/* footer contact info */}
                <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone size={14} color="#4a9c59" />
                        +91 8606071078
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                        <Mail size={14} color="#4a9c59" />
                        shamsulhudaacademy@yahoo.com
                    </span>
                </div>

            </div>
        </>
    )
}