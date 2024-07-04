import { GlobeAltIcon, MenuAlt1Icon, UserCircleIcon } from "@heroicons/react/solid"

export const Navbar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
       <p className="hidden lg:inline cursor-pointer text-gray">become a host</p>
       <GlobeAltIcon className="cursor-pointer h-6"/>
       <div className="flex space-x-2 border-2 p-2 rounded-full">
         <MenuAlt1Icon className="h-6"/>
         <UserCircleIcon className="h-6"/>
       </div>
    </div>
  )
}

