// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { AddresWrapper, AddressScroll, AddressIcon, AddressItem, AddressText, AddressContainer } from './style';

const AddressAutocomplete: React.FC<IPlainObject> = ( props ) => {
	const strongMatch = ( elem: string ) => {
		const regex = new RegExp( '(^|)(' + props.value + ')(|$)', 'ig' );
		const string = elem.replace( regex, '$1*$2*$3' )
		
		return string.split( '*' );
	};

	return (
		<AddressContainer>
			<AddresWrapper>
				<AddressScroll>
					{props.items !== null &&
						props.items.map( ( elem, index ) =>
							<AddressItem key={index} onClick={e => props.handlerClick(e, `${elem.street_line} ${elem.secondary}`)}>
								<AddressIcon><use xlinkHref="#icon-location" /></AddressIcon>
								<AddressText>
								{strongMatch(`${elem.street_line} ${elem.secondary}`)[0]}<strong>{strongMatch(`${elem.street_line} ${elem.secondary}`)[1]}</strong>{strongMatch(`${elem.street_line} ${elem.secondary}`)[2]} <span>{elem.city} {elem.state}</span>
								</AddressText>
							</AddressItem>	
						)
					}
				</AddressScroll>
			</AddresWrapper>
		</AddressContainer>
	);
};

export default AddressAutocomplete;