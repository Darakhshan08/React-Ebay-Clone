import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Carousel } from "flowbite-react";


function App() {
 

  return (
    <>
    <main class="container mx-auto px-4">
  <div className="bg-yellow-300 relative overflow-hidden mt-10 rounded-3xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] object-cover">
      <Carousel>

      <div class="bg-black relative overflow-hidden mt-10 rounded-3xl h-[400px]">
      <a href="" aria-label="Explore parts" >
      <div class="relative h-[400px]">
        <div class="absolute inset-0 bg-cover bg-center bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg')]"></div>
        <div class="absolute inset-0 opacity-70"></div>
        <div class="relative z-10 h-full flex flex-col justify-center text-white p-8">
          <div class="mb-4">
            <h2 class="text-3xl md:text-4xl font-bold leading-tight ">
              Be your side in any <span class="block">season</span>
            </h2>
          </div>
          <div class="mb-6">
            <p class="text-lg md:text-xl">Enjoy worry-free driving with tires,parts<span class="block">and more.</span></p>
          </div>
          <div class="flex items-center">
            <span class="w-40 h-12 inline-flex items-center justify-center text-white border border-white py-2 px-4 font-bold hover:bg-white hover:text-black transition rounded-full">
             Find your parts
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>

     <div class="bg-black relative overflow-hidden mt-10 rounded-3xl h-[400px]">
      <a href="" aria-label="Explore parts" class="block">
      <div class="relative h-[400px]">
        <div class="absolute inset-0 bg-cover bg-center bg-[url('https://i.ebayimg.com/images/g/L1sAAOSwU3Rm8WV6/s-l1600.webp')]"></div>
        <div class="absolute inset-0 opacity-70"></div>
        <div class="relative z-10 h-full flex flex-col justify-center text-white p-8">
          <div class="mb-4">
            <h2 class="text-3xl md:text-4xl font-bold leading-tight ">
              Be your side in any <span class="block">season</span>
            </h2>
          </div>
          <div class="mb-6">
            <p class="text-lg md:text-xl">Enjoy worry-free driving with tires,parts<span class="block">and more.</span></p>
          </div>
          <div class="flex items-center">
            <span class="w-40 h-12 inline-flex items-center justify-center text-white border border-white py-2 px-4 font-bold hover:bg-white hover:text-black transition rounded-full">
             Find your parts
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>

        <div class="bg-black relative overflow-hidden mt-10 rounded-3xl h-[400px]">
      <a href="" aria-label="Explore parts" class="block">
      <div class="relative h-[400px]">
        <div class="absolute inset-0 bg-cover bg-[url('https://i.ebayimg.com/thumbs/images/g/ixIAAOSwPrdk6NrF/s-l1200.webp')]"></div>
        <div class="absolute inset-0 opacity-70"></div>
        <div class="relative z-10 h-full flex flex-col justify-center text-white p-8">
        </div>
      </div>
    </a>
  </div>
 
  <section class="bg-gray-100 relative overflow-hidden mt-10 rounded-3xl h-[400px] sm:h-[400px] md:h-[500px] lg:h-[400px]">
  <div class="container mx-auto flex flex-col lg:flex-row">
  <div class="relative z-10 h-full flex flex-col justify-center text-black p-8  md:text-left">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
          Explore,discover <span class="block">collect</span>
        </h2>
        <p class="mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
          Keep your vehicle on firm ground with <span class="block">parts and accessories.</span>
        </p>
        <div class="flex items-center">
            <span class=" mt-4 w-40 h-12 inline-flex items-center justify-center text-black border border-black py-2 px-4 font-bold hover:bg-black hover:text-white transition rounded-full">
            Start bidding
            </span>
          </div>
    </div>

    <div class="lg:max-w-fit lg:mt-0 object-cover rounded-r-lg">
      <a href="https://www.ebay.com/e/row/tcg-auctions" class="block">
        <img class="relative h-[400px] object-cover rounded-md" src="https://i.ebayimg.com/images/g/nO8AAOSw-i9mtigQ/s-l1600.webp" alt="Trading Cards Banner"/>
      </a>
    </div>
    </div>
</section>






      </Carousel>
     </div>

<section class="mt-12">
  <h2 class="text-2xl sm:text-3xl font-bold text-center">Explore Popular Categories</h2>
  <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-8">
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">Luxury</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center ">Sneakers</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">P & A</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">Refurbished</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">Trading Cards</h3>
    </div>


    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg" alt="Sneakers" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">Pre-loved Luxury</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img src="https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg" alt="Luxury" class="w-full h-full object-cover"/>
      </div>
      <h3 class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">Toys</h3>
    </div>

  </div>
</section>

<section class="bg-black relative overflow-hidden mt-10 rounded-3xl h-[400px] sm:h-[400px] md:h-[500px] lg:h-[400px]">
  <a href="" aria-label="Explore parts" class="block">
    <div class="relative h-[400px]">
      <img src="https://i.ebayimg.com/images/g/fiMAAOSwZB9m8YrR/s-l1600.webp" alt="Promotional Banner" 
      class="absolute inset-0 object-cover w-full h-full"/>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 h-full flex flex-col justify-center text-white p-8  md:text-left">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          On the road, we've <span class="block">got your back</span>
        </h2>
        <p class="mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
          Keep your vehicle on firm ground with <span class="block">parts and accessories.</span>
        </p>
        <div class="flex items-center">
            <span class=" mt-4 w-40 h-12 inline-flex items-center justify-center text-white border border-white py-2 px-4 font-bold hover:bg-white hover:text-black transition rounded-full">
             Find your parts
            </span>
          </div>
      </div>
    </div>
  </a>
</section>

<section class="bg-gray-100 relative overflow-hidden mt-10 rounded-3xl h-[400px] sm:h-[400px] md:h-[500px] lg:h-[400px]">
  <div class="container mx-auto flex flex-col lg:flex-row">
  <div class="relative z-10 h-full flex flex-col justify-center text-black p-8  md:text-left">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
          Explore,discover <span class="block">collect</span>
        </h2>
        <p class="mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
          Keep your vehicle on firm ground with <span class="block">parts and accessories.</span>
        </p>
        <div class="flex items-center">
            <span class=" mt-4 w-40 h-12 inline-flex items-center justify-center text-black border border-black py-2 px-4 font-bold hover:bg-black hover:text-white transition rounded-full">
            Start bidding
            </span>
          </div>
    </div>

    <div class="lg:max-w-fit lg:mt-0 object-cover rounded-r-lg">
      <a href="https://www.ebay.com/e/row/tcg-auctions" class="block">
        <img class="relative h-[400px] object-cover rounded-md" src="https://i.ebayimg.com/images/g/nRIAAOSwBO5m4azT/s-l960.webp" alt="Trading Cards Banner"/>
      </a>
    </div>
    </div>
</section>
</main>
      
    </>
  )
}

export default App
