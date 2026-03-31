export default function Info() {
    return (
        <section className="flex flex-col min-h-screen">
        <div className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-white">
            <div 
                className="absolute w-105 md:w-125 h-90 md:h-105 bg-[#c8a96e] opacity-100"
                style={{ animation: 'blob 7s ease-in infinite'}}/>
                <div 
                    className="absolute w-105 md:115 h-75 md:105 bg-[#c8a96e] opacity-100" 
                    style={{ animation: 'blob 7s ease-in-out infinite'}} />

                    <div className="relative z-10 max-w-3xl px-6 text-center">
                        <h1 
                            className="text-4xl font-semibold text-white"
                            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                            Why Choose Us?
                        </h1>
                        <p className="py-5 text-sm font-semibold text-gray-800 md:text-lg">
                            To provide quality Islamic education that combines traditional knowledge with contemporary understanding, fostering spiritual growth and intellectual development while serving the community through educational programs, outreach initiatives, and character building activities that promote Islamic values and contribute positively to society.
                        </p>
                    </div>
                    <style>
                        {`
                            @keyframes blob {
                                0%, 100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; }
                                25% { border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;}
                                50%       { border-radius: 40% 60% 60% 40% / 45% 55% 45% 55%; }
                                75%       { border-radius: 55% 45% 50% 50% / 40% 60% 50% 60%; }
                            }
                        `}
                    </style>
            </div>
<div className="flex flex-col items-baseline justify-center w-full mx-8 my-4 md:flex-row h-fit md:mx-0">
    <div className="flex flex-col md:h-44 md:flex-row items-center justify-between gap-10 bg-[#18e13d] rounded-lg shadow-md px-6 py-8 w-80 md:w-fit">

        <div className="flex items-center gap-3">
            <img src="./src/assets/images/students.png" className="h-16" />
            <div>
                <h2 className="gap-2 text-4xl font-bold text-white">300+</h2>
                <p className="text-xl font-semibold text-white/90">Students</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <img src="../assets/images/faculties.png" className="h-24 " />
            <div>
                <h2 className="gap-2 text-4xl font-bold text-white">20+</h2>
                <p className="text-xl font-semibold text-white/90">Faculties</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <img src="/src/assets/images/digital.png" className="h-20" />
            <div>
                <h2 className="gap-2 text-4xl font-bold text-white">10+</h2>
                <p className="text-xl font-semibold text-white/90">Digital Classes</p>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <img src="/src/assets/images/library.png" className="h-24" />
            <div>
                <h2 className="gap-2 text-4xl font-bold text-white">10000+</h2>
                <p className="text-xl font-semibold text-white/90">Library Books</p>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}