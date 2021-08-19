// Packages
import React from 'react';

// Definitions
import { IListing } from '@/def/IListings';

// Styles
import { ListingWrapper, ListingContent, ListingRow, ListingColImg, ListingImg, ListingColInfo, ListingTitle, ListingFooter, ListingFooterLink } from './style';

// Components
import ListingInfo from './info';

const Listing: React.FC<IListing> = (props) => {
	return (
		<ListingWrapper>
			<ListingContent>
				<ListingRow>
					<ListingColImg>
						<ListingImg alt={props.alt} src={props.image} />
					</ListingColImg>
					<ListingColInfo>
						<ListingTitle>Don't stop <span>researching<span>!</span></span></ListingTitle>
						{/* LISTING */}
						<ListingInfo items={props.listingInfo} />
						{/* LISTING WIDGET */}
						
					</ListingColInfo>
				</ListingRow>
			</ListingContent>
			<ListingFooter>
				<ListingFooterLink href="//autoweb.com" target="_blank">Powered by: <span>AutoWeb</span></ListingFooterLink>
			</ListingFooter>
		</ListingWrapper>
	);
};

export default Listing;