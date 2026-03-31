export default function Donate() {
  return (
    <section className="max-w-6xl mx-auto p-5 md:p-12 bg-white min-h-[80vh] flex items-center">
      <div className="grid items-center w-full grid-cols-1 gap-12 md:grid-cols-2">
        
        {/* === LEFT SIDE: Bank Details === */}
        <div className="space-y-8">
            {/* Holder Name */}
            <div>
                <h2 className="mb-6 text-sm font-bold tracking-wide text-blue-900 uppercase md:text-base">
                    HOLDER NAME: SHAMSUL HUDA ISLAMIC ACADEMY
                </h2>
            </div>

            {/* Single Bank Block */}
            <div className="py-2 pl-6 border-l-4 border-blue-900">
                <h3 className="mb-4 text-xl font-bold text-blue-900">
                    STATE BANK OF INDIA
                </h3>
                
                <div className="space-y-2 text-sm font-medium text-gray-600 md:text-base font-poppins">
                    <p>
                        <span className="inline-block w-32 font-bold text-gray-800">Account No:</span> 
                        163910801200117
                    </p>
                    <p>
                        <span className="inline-block w-32 font-bold text-gray-800">IFSC:</span> 
                        KSBK0001639
                    </p>
                    <p>
                        <span className="inline-block w-32 font-bold text-gray-800">Branch:</span> 
                        Kuttikkattoor
                    </p>
                    <p>
                        <span className="inline-block w-32 font-bold text-gray-800">Phone:</span> 
                        0494-2463155
                    </p>
                </div>
            </div>
            
            {/* Optional Note */}
            <p className="mt-4 text-xs italic text-gray-400">
                * Please share the transaction receipt on WhatsApp after transfer.
            </p>
        </div>

        {/* === RIGHT SIDE: QR Code Card === */}
        <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs p-8 transition-transform duration-300 transform bg-white border border-gray-100 shadow-2xl rounded-3xl hover:scale-105">
                
                {/* Top GPay Logo Area */}
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        {/* You can use an SVG or Image for the GPay logo here */}
                        <span className="text-4xl font-bold text-gray-600">G</span>
                        <span className="text-4xl font-bold text-gray-600">Pay</span>
                    </div>
                </div>

                <div className="mb-4 text-center">
                     <h4 className="font-bold text-gray-800">SHAMSUL HUDA ISLAMIC ACADEMY</h4>
                     <p className="text-sm text-gray-500">+91 97454 60575</p>
                </div>

                {/* QR Code Image Placeholder */}
                <div className="flex items-center justify-center w-full mb-6 overflow-hidden bg-gray-100 border-2 border-gray-300 border-dashed rounded-xl aspect-square">
                     {/* 👇 PUT YOUR QR CODE IMAGE HERE */}
                     <img 
                        src="/src/images/Screenshot 2025-11-23 021117.png" 
                        alt="QR Code" 
                        className="object-cover w-full h-full"
                        // onError={(e) => e.target.style.display = 'none'} // Hides if no image
                     />
                     {/* Placeholder text if image missing */}
                </div>

                {/* Bottom Payment Logos */}
                <div className="flex justify-center gap-3 transition-all opacity-70 grayscale hover:grayscale-0">
                     {/* Simple colored circles to represent apps, replace with actual logos if needed */}
                     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">GP</div>
                     <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white text-[8px] font-bold">Paytm</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}