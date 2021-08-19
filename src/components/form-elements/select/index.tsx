// Packages
import React, { useState, useEffect } from 'react';

// Definitions
import { ISelect } from '@/def/ISelect';
import { IMake } from '@/def/IMake';
import { IModel } from '@/def/IModel';

// Components
import Cue from '../cue';

// Styles
import { FormElement, FormElementLabel, FormElementMessage, Element, FormElementArrow } from '../style';

const Select: React.FC<ISelect> = ( props ) => {
	const [focus, setFocus] = useState<boolean>( false );
	const [empty, setEmpty] = useState<boolean>( props.value.length !== 0 ? false : true );

	const handlerFocus = ( e: React.FocusEvent<HTMLSelectElement> ) => setFocus( true );
	const handlerBlur = ( e: React.FocusEvent<HTMLSelectElement> ) => setFocus( false );
	const handlerChange = ( e: React.ChangeEvent<HTMLSelectElement> ) => {
		props.handlerChange !== undefined && props.handlerChange( e );
		e.target.value.length !== 0 ? setEmpty( false ) : setEmpty( true );
		e.target.blur();
	};

	useEffect(() => {
		props.options.length === 0 && setEmpty(true);
	});

	return (
		<FormElement active={focus || !empty} cue={props.cue} error={props.error}>
			<Element
				id={props.id}
				name={props.name}
				defaultValue={props.value}
				onFocus={handlerFocus}
				onBlur={handlerBlur}
				onChange={handlerChange}
				active={focus || !empty}
				as="select"
				disabled={props.options.length === 0}
			>
				<option value="">Select a {props.label}</option>
				{props.options && (
					props.options.map(( option: IMake | IModel, index: number ) =>
						<option key={index} id={`${option.id}`} value={option.value}>{option.name}</option>
					)
				)}
			</Element>
			<FormElementArrow focus={focus} />
			<FormElementLabel
				htmlFor={props.id}
				active={focus || !empty}
				select
			>{props.label}</FormElementLabel>
			{props.cue && <Cue />}
			{props.error &&
				<FormElementMessage>{props.message} {props.label.toLocaleLowerCase()}</FormElementMessage>
			}
		</FormElement>
	);
};

export default Select;