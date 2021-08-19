// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { AdvantagesWrapper, Advantage, AdvantageTitle, AdvantageIcon, AdvantageText } from './style';

const advantagesList = [
	{title: 'Free', text: 'w/ No Obligation to Buy'},
	{title: 'Fast', text: 'Save Time & Money'},
	{title: 'Easy', text: 'No Haggle Price Quotes'}
];

const Advantages: React.FC<IPlainObject> = ( props ) => {
	return (
		<AdvantagesWrapper>
			{advantagesList.map((advantage, index) =>
				<Advantage key={index}>
					<AdvantageTitle>
						<AdvantageIcon><use xlinkHref="#icon-check" /></AdvantageIcon> {advantage.title}
					</AdvantageTitle>
					<AdvantageText>{advantage.text}</AdvantageText>
				</Advantage>
			)}
		</AdvantagesWrapper>
	);
};

export default Advantages;