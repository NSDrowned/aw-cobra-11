// Packages
import React from 'react';

// Definitions
import { IBox } from '@/def/IBox';

// Styles
import { BoxWrapper, BoxHeader } from './style';

// Components
import Step from './step';
import Title from './title';
import SubTitle from './subtitle';
import BoxFooter from './footer';

const Box: React.FC<IBox> = ( props ) => {
	return (
		<BoxWrapper>
			<BoxHeader>
				{props.step && props.totalSteps && <Step>Step {props.step} of {props.totalSteps}</Step>}
				{props.title && <Title>{props.title}</Title>}
				{props.subtitle && <SubTitle>{props.subtitle}</SubTitle>}
			</BoxHeader>
			{props.children}
			<BoxFooter step={props.step} />
		</BoxWrapper>
	);
};

export default Box;