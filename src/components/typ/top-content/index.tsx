// Packages
import React from 'react';

// Definitions
import { ITypTop, ISelectedDealers } from '@/def/ITypTop';

// Styles
import { TopContentWrapper, TopTitle, TopSubTitle, TopText, TopDealers, TopUser } from './style';

// Components
import Container from '../container';

const TopContent: React.FC<ITypTop> = (props) => {
	return (
		<TopContentWrapper>
			<Container>
				<TopTitle>Thank You, <TopUser>{props.name} {props.last}</TopUser></TopTitle>
				<TopSubTitle>Your request for {props.make} {props.model} is being processed.</TopSubTitle>
				<TopText>You will hear from the following dealer(s) shortly, usually within 24 hours:</TopText>
				<TopDealers>
					{props.dealers && (
						props.dealers.map((option: ISelectedDealers, index: number) =>
							<li key={index} data-id={option.id}>{option.name}</li>
						)
					)}
				</TopDealers>
			</Container>
		</TopContentWrapper>
	);
};

export default TopContent;