export default function Message() {
    return (
        <div className="relative h-screen bg-center bg-cover bg-[url('/src/assets/images/unais.jpeg')] ">
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
            <div className="relative z-10 grid h-full md:grid-cols-2">
                <div className="flex flex-col items-start justify-end gap-6 px-6 py-6 md:px-16 md:py-10"> 
                    <h2 className="text-4xl font-bold">
                        Unais Hudawi
                    </h2>
                    <p className="font-semibold text-gray-600 ">
                        Shamsul Huda Islamic Academy , a graduate institute affiliated to Darul Huda Islamic University Kerala<span className="hidden md:inline">, is a prestigious centre of Islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing.</span>
                    </p>
                </div>
                <div className="items-end hidden px-6 py-6 md:flex justify-end-safe md:px-25 md:py-10">
                    <button
                        className="p-4 px-6 font-semibold text-white bg-black rounded-lg shadow-md hover:scale-105 active:scale-95" 
                    >Contact</button>
                </div>
            </div>
        </div>
    )
}