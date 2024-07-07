import { format } from 'date-fns';
import Footer from "../components/Footer";
import { Header } from "../components/header/Header";
import { getSearchResult } from '../utils/api';
import { SearchresultData } from '../types/app';
import { ListCard } from '../components/ListCard';

type searchParams  = {
   location : string,
   startDate : string,
   endDate : string,
   numOfGuests : string,
}
export default  async function SearchResult  ({searchParams : {location, startDate , endDate , numOfGuests} } : {searchParams : searchParams})  {
  let formatedStartDate;
  let formatedEndDate;
  if( startDate &&  endDate ) {
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const rang = `${formatedStartDate} - ${formatedEndDate}`  
  const filters = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];
  const searchResultData : SearchresultData = await getSearchResult();
  console.log(searchResultData);
  return (
    <>
      <Header placeholder={`${location} | ${rang} | ${numOfGuests}`}/>
      <main className='container'>
        <div className='pt-10 pr-4'>
          <p className='mb-2'>
            300 Days+ Stays {formatedStartDate} {formatedEndDate} for {numOfGuests} guests
          </p>
          <h1>Stays in {location}</h1>
          {filters.map((filter) => (
            <button type='button' className='filter-btn' key={filter}>
              {filter}
            </button>
          ))}
        </div>  
        <div>
          {searchResultData.map((card) => (
            <ListCard
              key={card.title}
              img={card.img}
              location={card.location}
              title={card.title}
              description={card.description}
              star={card.star}
              price={card.price}
              total={card.total}
            />
          ))}  
        </div> 
      </main>
      <Footer/>
    </>
  )
}






