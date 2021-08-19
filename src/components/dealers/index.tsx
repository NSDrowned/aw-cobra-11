// Packages
import React from 'react';

// Definitions
import { IDealer, IDealers } from '@/def/IDealers';
import Checkbox from './checkbox';

// Styles
import { DealersError, DealersWrapper } from './style';

const Dealers: React.FC<IDealers> = ( props ) => {
	return (
		<DealersWrapper one={props.items.length === 1}>
			{props.error &&
				<DealersError>Select at least one dealer</DealersError>
			}
			{props.items.length > 1 &&
				<Checkbox all id="all-dealers" isChecked={props.allChecked} handlerChange={props.handlerChange} cue={props.cue} name="Select All Dealers" />
			}
			{props.items.map((dealer: IDealer, index: number) =>
				<Checkbox key={index} one={props.items.length === 1} id={dealer.id} isChecked={dealer.isChecked} handlerChange={props.handlerChange} name={dealer.name} address={dealer.address} />
			)}
		</DealersWrapper>
	);
};

export default Dealers;