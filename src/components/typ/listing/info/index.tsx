// Packages
import React from 'react';

// Definitions
import { IListingInfo, IListingData } from '@/def/IListingInfo';

// Styles
import { ListingInfoWrapper, InfoTitle, InfoText, InfoLink, InfoBtn, InfoBtnText, InfoBtnArrow } from './style';

const ListingInfo: React.FC<IListingInfo> = (props) => {
	return (
		<>
			{props.items && (
				props.items.map((item: IListingData, index: number) =>
				<ListingInfoWrapper key={index} href={item.url} title={item.urlTitle} target="_blank">
					<InfoTitle>{item.title}</InfoTitle>
					<InfoText>{item.firstText}</InfoText>
					<InfoText>{item.secondText}</InfoText>
					<InfoLink>{item.shortUrl}</InfoLink>
					<InfoBtn>
						<InfoBtnText>{item.btnText}</InfoBtnText>
						<InfoBtnArrow></InfoBtnArrow>
					</InfoBtn>
				</ListingInfoWrapper>
				)
			)}
		</>
	);
};

export default ListingInfo;