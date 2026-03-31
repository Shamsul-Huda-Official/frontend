import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#f8f6f1] overflow-hidden">

            {/* grid background */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px'
                }}
            />

            {/* content */}
            <div className="relative z-10 text-center px-6">

                {/* 404 number */}
                <div className="flex items-center justify-center leading-none mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="text-[8rem] md:text-[12rem] font-black text-[#1a1a2e]">4</span>
                    <span className="text-[8rem] md:text-[12rem] font-black text-transparent"
                        style={{ WebkitTextStroke: '3px #c8a96e' }}>0</span>
                    <span className="text-[8rem] md:text-[12rem] font-black text-[#1a1a2e]">4</span>
                </div>

                {/* gold divider */}
                <div className="w-14 h-0.75 bg-[#c8a96e] mx-auto mb-5 rounded-full" />

                {/* title */}
                <h1
                    className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Page Not Found
                </h1>

                {/* message */}
                <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-8">
                    Looks like this page took the day off. <br />
                    Let's get you back on track.
                </p>

                {/* button */}
                <Link
                    to={ROUTES.HOME}
                    className="inline-block px-8 py-3 bg-[#1a1a2e] text-[#f8f6f1] text-sm font-medium tracking-wide rounded hover:bg-[#c8a96e] hover:-translate-y-0.5 transition-all duration-200"
                >
                    Back to Home
                </Link>

            </div>

            {/* playfair display font */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');`}</style>

        </div>
    )
}