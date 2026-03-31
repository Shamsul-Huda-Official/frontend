import { ProfileCard } from '../components/ProfileCard'
import { managementData } from '../constants/management'
import { CalendarX } from "lucide-react";

export default function Management() {
    return (
        <section className="px-4 py-12 md:px-10">

            <div className="mb-10">                
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Management
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {managementData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center col-span-3 py-24 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                        <CalendarX size={28} className="text-[#4A9C59]" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-gray-800">
                        No Management Uploaded
                    </h3>
                    <p className="text-sm text-gray-400">
                        Check back soon — new management members will appear here.
                    </p>
                </div>
                ) : (
                managementData.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                ))
            )}
            </div>

        </section>
    )
}