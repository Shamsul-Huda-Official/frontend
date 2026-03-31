import { Mail } from 'lucide-react'

// WhatsApp icon as SVG since lucide doesn't have it
function WhatsAppIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L.057 23.535a.75.75 0 0 0 .916.938l5.9-1.547A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.432l-.372-.222-3.853 1.011 1.029-3.762-.242-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
    )
}

export function ProfileCard({ name, role, department, email, whatsapp, photo }) {
    return (
        <div className="flex overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-lg">

            <div className="w-32 bg-gray-100 shrink-0">
                <img
                    src={photo}
                    alt={name}
                    className="object-cover object-center w-full h-full"
                />
            </div>

            <div className="flex flex-col justify-between flex-1 p-4">

                <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#4A9C59] bg-green-50 px-2 py-0.5 rounded-full">
                        {role}
                    </span>

                    <h3 className="text-base font-bold text-gray-900 mt-2 mb-0.5">
                        {name}
                    </h3>

                    {department && (
                        <p className="text-xs text-gray-400">{department}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1.5 mt-3 pt-3 border-t border-gray-100">

                    {whatsapp && (
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#4A9C59] transition-colors"
                        >
                            <span className="text-[#25D366]"><WhatsAppIcon /></span>
                            {whatsapp}
                        </a>
                    )}

                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#4A9C59] transition-colors"
                        >
                            <Mail size={13} />
                            {email}
                        </a>
                    )}

                </div>
            </div>
        </div>
    )
}