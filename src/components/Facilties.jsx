import { useEffect, useState } from "react";

const facilities = [
    {
        id: 1, 
        name: 'Library',
        image: '/src/assets/images/library.JPG',
    },
      {
    id: 2,
    name: 'Classroom',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80',
  },
  {
    id: 3,
    name: 'Mosque',
    image: '/src/assets/images/mosque.JPG',
  },
  {
    id: 4,
    name: 'Computer Lab',
    image: '/src/assets/images/computer.JPG',
  },
  {
    id: 5,
    name: 'Sports Ground',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1400&q=80',
  },
]

export default function Facilities() {
    const [ active, setActive ] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive( prev => (prev + 1) % facilities.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const current = facilities[active]

    return (
        <section className="relative w-[95vw] h-screen overflow-hidden rounded-2xl mx-auto my-10 mx-w-[95vw]">
            {facilities.map((facility, index) => (
                <div 
                    key={facility.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={facility.image} 
                        alt={facility.name}
                        className="object-cover w-full h-full" 
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            <div className="absolute z-10 top-5 left-6">
                    <p className="text-xl font-semibold tracking-wide text-white">
                        Our <span className="italic font-light">Facilities</span>
                    </p>
            </div>

            <div className="absolute z-10 top-5 right-6">
                <p className="text-sm font-light tracking-wider text-white">
                    <span className="text-2xl font-bold">
                        {String( active + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white/60">
                        /{String(facilities.length).padStart(2, '0')}
                    </span>
                </p>
            </div>

             <div className="absolute left-0 right-0 z-10 pointer-events-none bottom-24">
                <p className="text-white/45 font-black text-6xl md:text-[clamp(5rem,15vw,12rem)] leading-none px-6 select-none">
                {current.name}
                </p>
            </div>
        
            <div className="absolute z-10 max-w-xl top-16 left-6">
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl md:text-5xl">
                Exceptional <span className="italic font-light">Facilities</span> Designed to
                Support Learning, Research and Discovery
                </h2>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-2 mx-2 mb-2 md:mb-4">
                {facilities.map((facility, index) => (
                <button
                    key={facility.id}
                    onClick={() => setActive(index)}
                    className="flex-1 cursor-pointer group"
                >
                    <hr className={`w-full border-0 h-[2px] transition-all duration-300 pb-2
                        ${index === active ? 'bg-white' : 'bg-white/30 group-hover:bg-white/60'}`}
                    />
                </button>

                ))}
            </div>
        </section>
    )
   
}