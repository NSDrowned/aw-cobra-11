import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect: React.FC = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace( '/' );
	}, []);
	return null;
};

export default Redirect;