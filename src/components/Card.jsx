export default function Card({ title, date, description, category, image }) {
    return (
                <div className="flex-shrink-0 w-[340px] h-[520px] bg-[#f5f5f7] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.015] transition-transform duration-300 flex flex-col">

            <div className="h-[200px] px-7 pt-7 pb-4 flex flex-col gap-1 flex-shrink-0">

                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4A9C59]">
                    {category}
                </p>

                <h3 className="text-[1.6rem] font-bold text-gray-900 leading-tight mt-1">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {description}
                </p>

                <p className="mt-2 text-xs text-gray-400">{date}</p>

            </div>

            <div className="h-[320px] w-full flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="object-cover object-top w-full h-full"
                />
            </div>
  </div>          
    )
}