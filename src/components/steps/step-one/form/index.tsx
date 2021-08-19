// Packages
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slices
import { saveZipCode, setModels } from '@/redux/slices/step-one';
import { setSelectedMake, setSelectedModel, setZipCode } from '@/redux/slices/step-one';

// Components
import Box from '@/comp/box';
import Button from '@/comp/button';
import Input from '@/comp/form-elements/input';
import Select from '@/comp/form-elements/select';

const FormOne: React.FC<IPlainObject> = (props) => {
	const dispatch = useDispatch();
	const [cue, setCue] = useState<string>( 'make' );
	const [error, setError] = useState<string>( '' );
	const [modelURL, setModelURL] = useState( props.models !== undefined ? props.models : [] );

	// Step 1 Data
	const stepOne = useSelector(( state: RootState ) => state.stepOne );
	const { button } = stepOne.ui;

	// Fill Models Select
	const { makes, models, zipcode } = stepOne.data;

	const valueMake = props.make !== undefined ? props.make : '';
	const valueModel = props.model !== undefined ? props.model : '';

	// form fields
	const fields = [
		{'field': 'make', 'value': valueMake, 'empty': valueMake.length !== 0 ? false : true, 'error': false, 'success': valueMake.length !== 0 ? true : false},
		{'field': 'model', 'value': valueModel, 'empty': valueModel.length !== 0 ? false : true, 'error': false, 'success': valueModel.length !== 0 ? true : false},
		{'field': 'zip-code', 'value': '', 'empty': true, 'error': zipcode.city === undefined, 'success': zipcode.city !== undefined}
	];

	const [formFields, setFormFields] = useState<object[]>(fields);

	// find next empty and update cue

	const updateInputs = ( doError: boolean ) => {
		setError('');
		setCue('');
		for (var i = 0; i < formFields.length; i++) {
			var current = formFields[i]['field'];
			var empty = formFields[i]['empty'];
			var error = formFields[i]['error'];

			let next = '';
			i < 2 ? next = formFields[i+1]['field'] : next = '';

			switch(true) {
				case (empty):
					setCue(current);
					if(doError) { setError(current) };
					return;
				case (error):
					setCue(current);
					setError(current);
					return;
				default:
					setCue(next);
			}
		}
	}

	const validateDropdown = (e: React.ChangeEvent<HTMLSelectElement>, inputIndex: number, dispatchFunction: Function) => {
		dispatch( dispatchFunction( e.target.value ) );
		const option = e.target.options[e.target.selectedIndex] as HTMLOptionElement;

		switch(true) {
			case (inputIndex === 0):
				setModelURL( [] );
				if(e.target.value) {
					Object.assign(formFields[inputIndex], {empty: false, error: false, value: option.value});
				} else {
					Object.assign(formFields[inputIndex], {empty: true, error: false, value: option.value});
				}
				Object.assign(formFields[1], {empty: true, error: false, value: ''});
				dispatch( setModels( e.target.value ) );
			break;
			case (inputIndex === 1):
				if(e.target.value) {
					Object.assign(formFields[inputIndex], {empty: false, error: false, value: option.value});
				} else {
					Object.assign(formFields[inputIndex], {empty: true, error: false, value: option.value});
				}
			break;
		}
		setFormFields(formFields);
		updateInputs( false );
	}

	const hanlderZipBlur = ( e: React.FocusEvent<HTMLInputElement> ) => {
		const zipRegex = /^\d{5}$|^\d{5}$/;

		if ( zipRegex.test( e.target.value ) ) {
			Object.assign(formFields[2], {error: zipcode.city === undefined, success: zipcode.city !== undefined});
		} else {
			Object.assign(formFields[2], {empty: true, error: false, success: false, value: e.target.value});
		}
		setFormFields(formFields);
		updateInputs( false );
	};

	const validateZipCode = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const zipRegex = /^\d{5}$|^\d{5}$/;

		if ( zipRegex.test( e.target.value ) ) {
			dispatch( setZipCode( e.target.value ) );
			Object.assign(formFields[2], {empty: false, value: e.target.value});
			setFormFields(formFields);
		} else {
			dispatch( saveZipCode( {} ) );
			Object.assign(formFields[2], {empty: true, error: false, success: false, value: e.target.value});
			setFormFields(formFields);
		}
		updateInputs( false );
	}

	const handlerSubmit = async ( e: React.MouseEvent<HTMLButtonElement> ) => {
		e.preventDefault();
		updateInputs( true );

		const errorInputs = formFields.filter( item => item['empty'] || item['error'] );

		if ( errorInputs.length === 0 ) {
			props.onSubmit !== undefined && props.onSubmit( e );
		}
	};

	useEffect(() => {
		updateInputs( false );
	}, []);

	useEffect(() => {
		console.log( formFields );
	});

	return (
		<Box step="1" totalSteps="3" title="Choose Your Vehicle" subtitle="Select a Model and Enter Your Zip to Continue...">
			<Select
				id="make"
				value={valueMake}
				name="make"
				label="Make"
				cue={cue === "make"}
				error={error === "make"}
				message="Select a"
				options={props.makes !== undefined ? props.makes : makes}
				handlerChange={(e) => validateDropdown(e, 0, setSelectedMake)}
			/>
			<Select
				id="model"
				value={valueModel}
				name="model"
				label="Model"
				cue={cue === "model"}
				error={error === "model"}
				message="Select a"
				options={modelURL.length !== 0 ? modelURL : models}
				handlerChange={(e) => validateDropdown(e, 1, setSelectedModel)}
			/>
			<Input
				id="zip-code"
				name="zip-code"
				label="Zip Code"
				icon="#icon-location"
				cue={cue === "zip-code"}
				error={error === "zip-code"}
				success={zipcode.city !== undefined}
				type="tel"
				message="Enter a valid"
				length={5}
				handlerBlur={hanlderZipBlur}
				handlerChange={validateZipCode}
				onlyNumbers
			/>
			<Button isDisabled={false} handlerClick={handlerSubmit}>{button}</Button>
		</Box>
	);
};

export default FormOne;