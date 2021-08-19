// Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slices

// Components
import Loader from '../loader';

// Styles
import { HeroImageWrapper, HeroImageContainer, HeroImageCover } from './style';
import { isLoading } from '@/redux/slices/step-one';

const HeroImage: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	let image: string = '';

	const make = useSelector(( state: RootState ) => state.stepOne.data.selectedMake );
	const model = useSelector(( state: RootState ) => state.stepOne.data.selectedModel );
	const loading = useSelector(( state: RootState ) => state.stepOne.ui.imageLoading );

	if ( model.image !== undefined ) {
		image = model.image;
	} else if ( make.image !== undefined ) {
		image = make.image;
	} else {
		image = '/desktop-hero-image.jpg';
	}

	const hanlderLoading = () => dispatch( isLoading( false ) );

	return (
		<HeroImageWrapper>
			<HeroImageContainer>
				<HeroImageCover>
					{image === '/desktop-hero-image.jpg' &&
						<>
							<source srcSet="/desktop-hero-image.webp 768w, /mobile-hero-image.webp 320w" type="image/webp" />
							<source srcSet="/desktop-hero-image.jpg 768w, /mobile-hero-image.jpg 320w" type="image/jpeg" />
						</>
					}
					<img onLoad={hanlderLoading} src={image} alt="Hero image" />
				</HeroImageCover>
			</HeroImageContainer>
			{loading && <Loader />}
		</HeroImageWrapper>
	);
};

export default HeroImage;