import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "./SearchBar"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
         <div className="container grid grid-cols-3 relative">
            <Link href='/' className="relative flex items-center h-10 my-auto">
                <Image 
                      alt="logo"
                      src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
                      width={100}
                      height={100}
                      className="object-contain object-left"
                  />
            </Link>
            <SearchBar/>
            <Navbar/>
         </div>
    </header>
  )
}


