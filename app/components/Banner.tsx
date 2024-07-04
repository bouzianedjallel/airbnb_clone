import Image from "next/image"

export const Banner = () => {
  return (
    <section>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
                alt="bannerImg"
                src='https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80 '
                className="object-cover object-left"
                fill
            />
            <div className="absolute top-1/2 w-full text-center">
               <p className="text-sm sm:text-lg mb-2">Not sure where to go? Perfect.</p>
               <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full"> 
                    click here
               </button>
            </div>
        </div>
    </section>
  )
}

