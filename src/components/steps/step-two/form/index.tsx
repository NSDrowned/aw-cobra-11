// Packages
import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { domains, names, wordDifference } from './word-difference';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { IFields, fieldAction } from '@/def/IValidations';

// Slices
import { saveAddress, saveEmail, saveFirstName, saveLastName, savePhoneNumber } from '@/redux/slices/step-two';

// Components
import Box from '@/comp/box';
import Button from '@/comp/button';
import Input from '@/comp/form-elements/input';
import EmailSuggested from '@/comp/email-suggested';
import AddressAutocomplete from '@/comp/address-autocomplete';
import { EmailSuggestedAnimation } from '@/comp/email-suggested/style';

// Styles
import { InputRow } from './style';
import { RootState } from '@/def/TRootReducer';

const FormTwo: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const [cue, setCue] = useState<string>( 'first-name' );
	const [error, setError] = useState<string>( '' );
	const [newEmail, setNewEmail] = useState<string>( '' );
	const [showSuggested, setShowSuggested] = useState({ first: true, show: false });
	const [emailValue, setEmailValue] = useState<string>( '' );
	const [phoneValue, setPhoneValue] = useState<string>( '' );
	const [addressValue, setAddressValue] = useState<string>( '' );
	const [addressAutocomplete, setAddressAutocomplete] = useState<object[]>( [] );
	const [autocomplete, setAutocomplete] = useState({ show: false, lastValue: '' });

	const button = useSelector(( state: RootState ) => state.stepTwo.ui.button );

	// form validation initialization

	const fieldsList = ['first-name', 'last-name', 'phone-number', 'address', 'email'];

	let formValues : IFields[] = [];
	fieldsList.map( input => { formValues[input] = {'field': input, 'value': '', 'status': 'empty'}} );

	// form validation reducer

	const [fields, formDispatch] = useReducer(formReducer, formValues);

	function formReducer(state, action : fieldAction) {
		let field = state[action.payload.field];
		switch (action.type) {
			case 'setEmpty': {
				Object.assign(field, {status: 'empty', value: ''});
				return {...state };
			}
			case 'setSuccess': {
				Object.assign(field, {status: 'success', value: action.payload.value });
				return { ...state }
			}
			case 'setError': {
				Object.assign(field, {status: 'error', value: action.payload.value });
				return {...state };
			}
			default:
			return state;
		}
	}

	// Update Cue

	const updateCue = () => {
		for(let i = 0; i < fieldsList.length; i++) {
			switch(true) {
				case (fields[fieldsList[i]].status === 'error'):
					setError(fieldsList[i]);
					setCue(fieldsList[i]);
				return;
				case (fields[fieldsList[i]].status === 'empty'):
					setCue(fieldsList[i]);
				return;
				default:
					setCue('');
			}
		}
	}

	useEffect(() => {
		updateCue();
	})

	// Input validation

	const validateInput = (e: React.FocusEvent<HTMLInputElement>, inputName: string, dispatchFunction: Function) => {
		// reset error before update
		setError('');
		// update store
		dispatch(dispatchFunction(e.target.value));

		if (e.target.value.length > 0) {
			switch(true) {
				case (inputName === 'phone-number'):
					validatePhone(e.target.value, inputName);
				break;
				case (inputName === 'email'):
					validateEmail(e.target.value, inputName);
				break;
				default:
					formDispatch({ type: 'setSuccess', payload: { field: inputName, value: e.target.value }});
			}
		} else {
			formDispatch({ type: 'setEmpty', payload: { field: inputName, value: '' }});
		}
	}

	// Phone validation

	const validatePhone = (value: string, inputName: string) => {
		if(value.length === 14) {
			error === 'phone-number' ? setError('') : null;
			formDispatch({ type: 'setSuccess', payload: { field: inputName, value: value }});
		} else {
			formDispatch({ type: 'setError', payload: { field: inputName, value: value }});
		}
	}

	// Phone Mask

	const handlerPhoneMask = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const value = e.target.value;
		const numbers = value.replace( /\D/g, '' );
		const match = numbers.match( /(\d{0,3})(\d{0,3})(\d{0,4})/ );
		const matchOne = numbers.length > 3 ? `(${match[1]}) ` : match[1];
		const matchTwo = numbers.length > 6 ? `${match[2]}-` : match[2];
		setPhoneValue( matchOne + matchTwo + match[3] );
	};

	// Email validation

	const validateEmail =  (value: string, inputName: string) => {
		const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if ( emailRegex.test( value ) ) {
			emailSuggested( value );
			error === 'email' ? setError('') : null;
			formDispatch({ type: 'setSuccess', payload: { field: inputName, value: value }});
		} else {
			formDispatch({ type: 'setError', payload: { field: inputName, value: value }});
		}
	}

	// Email suggestion

	const handlerEmailChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		setEmailValue( e.target.value );
	};

	const emailSuggested = ( value: string ) => {
		if ( value.length !== 0 ) {
			const lastAt = value.lastIndexOf( '@' );
			const lastPoint = value.lastIndexOf( '.' );
			const name = value.substring( 0, lastAt );
			const host = value.substring( lastAt + 1 );
			const domain = value.substring( lastPoint + 1 );
			const domainName = host.split( '.' );

			let newName: string = wordDifference( domainName[0], 3, names );
			let newDomain: string = wordDifference( domain, 3, domains );

			newName.length !== 0 || newDomain.length !== 0 ? setShowSuggested({ first: showSuggested.first, show: true }) : setShowSuggested({ first: showSuggested.first, show: false });

			newName = newName.length === 0 ? domainName[0] : newName;
			newDomain = newDomain.length === 0 ? domain : newDomain;

			setNewEmail( `${name}@${newName}.${newDomain}` );
		}
	};

	const handlerSuggested = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		const target = e.target as HTMLButtonElement;
		setShowSuggested({ first: false, show: false });
		if ( target.dataset.action === 'yes' ) {
			setEmailValue( newEmail );
			dispatch( saveEmail( newEmail ) );
			// update form state
			formDispatch({ type: 'setSuccess', payload: { field: 'email', value: newEmail }});
		}
	};

	// Form Submit

	const handlerSubmit = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		e.preventDefault();

		// set error if any field is empty
		for(let i = 0; i < fieldsList.length; i++) {
			if(fields[fieldsList[i]].status === 'empty') {
				setError(fieldsList[i]);
				return;
			}
		}
		
		props.onSubmit( e );
	};

	// Address autocomplete

	const handlerAutocomplete = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const ssURL = 'https://us-autocomplete-pro.api.smartystreets.com/lookup';
		const ssKey = '?auth-id=25770505095992457';
		const ssZipCode = `&include_only_zip_codes=${props.zipcode}`;
		const ssSearch = `&search=${e.target.value}`;
		setAddressValue( e.target.value );

		if ( e.target.value.length !== 0 ) {
			const resAutocomplete = await fetch( ssURL + ssKey + ssZipCode + ssSearch );
			const jsonAutocomplete = await resAutocomplete.json();

			setAddressAutocomplete( jsonAutocomplete.suggestions !== null ? jsonAutocomplete.suggestions : [] );
			setAutocomplete({ show: true, lastValue: autocomplete.lastValue });
		} else {
			setAutocomplete({ show: false, lastValue: autocomplete.lastValue });
			setAddressAutocomplete( [] );
		}
	};

	const setNewAddress = ( e: React.MouseEvent<HTMLLIElement>, address: string ) => {
		setAddressValue( address );
		setAutocomplete({ show: false, lastValue: address });
	};

	return (
		<Box step="3" totalSteps="3" title="Complete Your Information">
			<InputRow>
				<Input
					id="first-name"
					type="text"
					name="first-name"
					label="First Name"
					cue={cue === 'first-name'}
					error={error === 'first-name'}
					success={fields['first-name'].status === 'success'}
					message="Enter"
					handlerBlur={(e) => validateInput(e, 'first-name', saveFirstName)}
				/>
				<Input
					id="last-name"
					type="text"
					name="last-name"
					label="Last Name"
					cue={cue === 'last-name'}
					error={error === 'last-name'}
					success={fields['last-name'].status === 'success'}
					message="Enter"
					handlerBlur={(e) => validateInput(e, 'last-name', saveLastName)}
				/>
			</InputRow>
			<Input
				id="phone-number"
				type="tel"
				name="phone-number"
				label="Phone Number"
				cue={cue === 'phone-number'}
				error={error === 'phone-number'}
				success={fields['phone-number'].status === 'success'}
				dynamicValue={phoneValue}
				length={14}
				message="Enter a"
				handlerBlur={(e) => validateInput(e, 'phone-number', savePhoneNumber)}
				handlerChange={handlerPhoneMask}
				onlyNumbers
			/>
			{/* Remove below // on the params commented to activate address autocomplete */}
			<Input
				id="address"
				type="text"
				name="address"
				label="Address"
				cue={cue === 'address'}
				error={error === 'address'}
				success={fields['address'].status === 'success'}
				// dynamicValue={addressValue}
				message="Enter a"
				autocomplete="off"
				city={props.city}
				handlerBlur={(e) => validateInput(e, 'address', saveAddress)}
				// handlerChange={handlerAutocomplete}
			/>
			{autocomplete.show && autocomplete.lastValue !== addressValue &&
				<AddressAutocomplete items={addressAutocomplete} value={addressValue} handlerClick={setNewAddress} />
			}
			<CSSTransition unmountOnExit in={showSuggested.show && showSuggested.first} timeout={300} classNames="email-suggested">
				<EmailSuggestedAnimation>
					<EmailSuggested email={newEmail} hanlderAction={handlerSuggested} />
				</EmailSuggestedAnimation>
			</CSSTransition>
			<Input
				id="email"
				dynamicValue={emailValue}
				type="email"
				name="email"
				label="Email Address"
				cue={cue === 'email'}
				error={error === 'email'}
				success={fields['email'].status === 'success'}
				message="Enter an"
				handlerChange={handlerEmailChange}
				handlerBlur={(e) => validateInput(e, 'email', saveEmail)}
			/>
			<Button handlerClick={handlerSubmit}>{button}</Button>
		</Box>
	);
};

export default FormTwo;