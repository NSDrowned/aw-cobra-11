// Packages
import React from 'react';

// Definitions
import { IDealer } from '@/def/IDealers';
import Cue from '../../form-elements/cue';

// Styles
import { Dealer, DealerInput, DealerCheck, DealerCheckIcon, DealerLabel, DealerText, DealerName, DealerAddress } from './style';

const Checkbox: React.FC<IDealer> = ( props ) => {
	return (
		<Dealer one={props.one} all={props.all}>
			<DealerInput id={props.id} type="checkbox" checked={props.isChecked} disabled={props.one} onChange={props.handlerChange} />
			<DealerLabel one={props.one} htmlFor={props.id} all={props.all}>
				<DealerCheck one={props.one} all={props.all}>
					<DealerCheckIcon><use xlinkHref="#icon-check" /></DealerCheckIcon>
				</DealerCheck>
				<DealerText>
					<DealerName one={props.one} all={props.all}>{props.name}</DealerName>
					{props.address !== undefined &&
						<DealerAddress one={props.one} all={props.all}>{props.address}</DealerAddress>
					}
				</DealerText>
			</DealerLabel>
			{props.cue &&
				<Cue dealers={true} />
			}
		</Dealer>
	);
};

export default Checkbox;