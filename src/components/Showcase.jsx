import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from './Card'

export default function Showcase({ title, events }) {
    const cardRef = useRef([]);
    const scrollRef = useRef(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const scroll = (direction) => {
        scrollRef.current?.scrollBy({
            left: direction === 'left' ? -340 : 340,
            behavior: 'smooth'
        })
    }

    const onMouseDown = (e) => {
        isDragging.current = true
        startX.current = e.pageX - scrollRef.current.offsetLeft
        scrollLeft.current = scrollRef.current.scrollLeft
        scrollRef.current.style.cursor = 'grabbing'
    }

    const onMouseMove = (e) => {
        if (!isDragging.current) return
        const x = e.pageX - scrollRef.current.offsetLeft
        scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5
    }

    const onMouseUp = () => {
        isDragging.current = false
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
    }
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove(
                                "opacity-0",
                                "translate-y-8",
                                "scale-95"
                            );
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
    
            cardRef.current.forEach((el) => {
                if (el) observer.observe(el);
            });
    
            return () => observer.disconnect();
        }, []);

    return (
        <section className="px-4 py-12 md:px-10">

            {/* header + arrows */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#4A9C59] hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#4A9C59] hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                className="flex gap-4 pb-4 overflow-x-auto select-none scroll-smooth"
                style={{ cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {events.map((event) => (
                    <div
                    key={event.id}
                    ref={(el) => (cardRef.current[event.id] = el)}
                    className="transition-all duration-700 ease-out scale-95 translate-y-8 opacity-0"
                    style={{ transitionDelay: `${ event.id * 120}ms`}}
                    >
                        
                    <Card key={event.id} {...event} />
                    </div>
                ))}
                </div>

            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        </section>
    )
}