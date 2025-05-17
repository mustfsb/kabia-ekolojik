import Image from "next/image"

const TestimonialCarousel = () => {
  return (
    <div className="relative w-full h-full">
      {/* Görsel yollarını güncelleyin */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image src="/images/world-map.png" alt="World Map" fill className="object-contain" />
      </div>

      {/* Decorative images */}
      <div className="absolute -left-10 top-20 rotate-[-10deg] rounded-3xl overflow-hidden shadow-xl w-48 h-64 md:w-64 md:h-80 z-10 hidden md:block">
        <Image src="/images/farmer-1.jpg" alt="Farmer" fill className="object-cover" />
      </div>

      <div className="absolute -left-5 bottom-20 rotate-[10deg] rounded-3xl overflow-hidden shadow-xl w-40 h-56 md:w-56 md:h-72 z-10 hidden md:block">
        <Image src="/images/farmer-2.jpg" alt="Farmer" fill className="object-cover" />
      </div>

      <div className="absolute -right-10 top-20 rotate-[10deg] rounded-3xl overflow-hidden shadow-xl w-48 h-64 md:w-64 md:h-80 z-10 hidden md:block">
        <Image src="/images/farmer-3.jpg" alt="Farmer" fill className="object-cover" />
      </div>

      <div className="absolute -right-5 bottom-20 rotate-[-10deg] rounded-3xl overflow-hidden shadow-xl w-40 h-56 md:w-56 md:h-72 z-10 hidden md:block">
        <Image src="/images/farmer-4.jpg" alt="Farmer" fill className="object-cover" />
      </div>

      {/* Decorative leaves */}
      <div className="absolute left-[15%] top-[20%] rotate-[20deg] w-16 h-16 md:w-24 md:h-24 z-10 hidden md:block">
        <Image src="/images/mint-leaf.png" alt="Leaf" width={100} height={100} className="object-contain" />
      </div>

      <div className="absolute right-[15%] bottom-[20%] rotate-[-15deg] w-20 h-20 md:w-32 md:h-32 z-10 hidden md:block">
        <Image src="/images/basil-plant.png" alt="Plant" width={150} height={150} className="object-contain" />
      </div>
    </div>
  )
}

export default TestimonialCarousel
