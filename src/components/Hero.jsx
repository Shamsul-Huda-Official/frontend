import college from '../assets/images/college.JPG'

export default function Hero() {
    
    return (
        <section className="relative w-[95vw] h-screen overflow-hidden rounded-2xl mx-auto my-10">

            <img 
                src={college}
                alt="College"
                className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-gradient-to- t from-white to-white/10" />

            <div className="absolute z-10 bottom-10 left-6">
                <h1 className="text-5xl font-black leading-none text-white md:text-[clamp(5rem,14vw,6rem)] ">
                    Shamsul Huda Islamic Academy
                </h1>
            </div>

        </section>
    )
}