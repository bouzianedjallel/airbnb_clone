import Image from "next/image"
import { ListingCardItem } from "../types/app";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

type ListCardProps = ListingCardItem;
export const ListCard = ({
    title,
    description,
    img,
    total,
    price,
    star,
    location,} : ListCardProps) => {
  return (
    <div className="flex cursor-pointer py-2 px-2 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative w-40 md:w-80 h-24 md:h-52 flex-shrink-0 pr-2">
        <Image
          alt='listImg'
          src={img}
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
           <h4>{location}</h4>
           <HeartIcon className="h-7 cursor-pointer"/>
        </div>
        <h2>{title}</h2>
        <hr className="w-10"/>
        <p className="text-gray-200">{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight '>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}