// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { EmailSuggestedActions, EmailSuggestedButton, EmailSuggestedIcon, EmailSuggestedText, EmailSuggestedWrapper } from './style';

const EmailSuggested: React.FC<IPlainObject> = ( props ) => {
	return (
		<EmailSuggestedWrapper>
			<EmailSuggestedText>Did you mean {props.email}?</EmailSuggestedText>
			<EmailSuggestedActions>
				<EmailSuggestedButton onClick={props.hanlderAction} data-action="yes">
					<EmailSuggestedIcon><use xlinkHref="#icon-check" /></EmailSuggestedIcon>
				</EmailSuggestedButton>
				<EmailSuggestedButton onClick={props.hanlderAction} data-action="no">
					<EmailSuggestedIcon><use xlinkHref="#icon-cross" /></EmailSuggestedIcon>
				</EmailSuggestedButton>
			</EmailSuggestedActions>
		</EmailSuggestedWrapper>
	);
};

export default EmailSuggested;