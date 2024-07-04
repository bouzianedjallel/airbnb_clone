import { LiveData } from '../../types/app';
import { getLive } from '../../utils/api';
import { MainHeading } from '../MainHeading';
import LiveCard from './LiveCard';

const Live = async () => {
  const liveData: LiveData = await getLive();
  return (
    <section className='py-5'>
      <div className='container'>
        <MainHeading title='Live Anywhere'/>
        <div className='flex space-x-3 overflow-scroll p-3 no-scrollbar'>
          {liveData.map((item) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;