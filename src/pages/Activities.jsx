import Card from "../components/Card";
import { eventsData } from "../constants/eventData";
import { useEffect, useRef } from "react";
import { CalendarX } from "lucide-react";

export default function Activities() {
    const cardRef = useRef([]);
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
        <section className="px-4 py-12 mx-auto -12 md:px-10">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Activities
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {eventsData.length === 0 ? (
                <div className="flex flex-col items-center justify-center col-span-3 py-24 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                        <CalendarX size={28} className="text-[#4A9C59]" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-800">
                        No Activities Uploaded
                    </h3>
                    <p className="text-sm text-gray-400">
                        Check back soon — new activities will appear here.
                    </p>
                </div>
                ) : (
                eventsData.map((event, i) => (
                    <div
                    key={event.id}
                    className="transition-all duration-700 ease-out scale-95 translate-y-8 opacity-0"
                    ref={(el) => (cardRef.current[i] = el)}
                    style={{ transitionDelay: `${i * 120}ms`}}
                    >
                        <Card
                            key={event.id}
                            title={event.name}
                            {...event}  
                        />
                    </div>
                )) 
                )}
            </div>
        </section>
    )
}