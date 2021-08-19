// Data
import { testimonialsList as testimonials } from '@/data/testimonials';

const randomizer = () => {
	const shuffledList = testimonials.sort( () => 0.5 - Math.random() );
	const totalList = shuffledList.slice( 0, 3 );
	
	return totalList;
};

export default randomizer;