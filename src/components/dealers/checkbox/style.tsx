// Packages
import styled, { css } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const Dealer = styled.div<{ theme: ThemeType, one?: boolean, all?: boolean }>`
	${props => props.all && css`
		background: ${props => props.theme.background.dealers.all};
	`}
	${props => props.one && css`
		background: ${props => props.theme.background.dealers.one};
		border-radius: 7px;
	`}
`;

const DealerInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	opacity: 0;
	visibility: hidden;
	&:checked {
		~ label {
			svg {
				opacity: 1;
				transform: scale( 1 );
			}
		}
	}
`;

const DealerCheck = styled.span<{ theme: ThemeType, one?: boolean, all?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20px;
	-webkit-box-flex: 0;
	flex: 0 0 20px;
	max-width: 20px;
	margin: 2px 12px 0 0;
	border-radius: 5px;
	${props => !props.one && css`
		border: 1px solid #AEAEAE;
		background: ${props => props.theme.background.dealers.checkbox.default};
	`}
`;

const DealerCheckIcon = styled.svg<{ theme: ThemeType }>`
	fill: ${props => props.theme.background.dealers.check.default};
	width: 12px;
	height: 12px;
	opacity: 0;
	transform: scale( .5 );
	transition: all ease .2s;
`;

const DealerLabel = styled.label<{ theme: ThemeType, one?: boolean, all?: boolean }>`
	cursor: ${props => props.one ? 'default' : 'pointer'};
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
	padding: ${props => props.one ? '8px' : '8px 16px'};
	${props => props.all && css`
		padding-top: 13px;
		padding-bottom: 13px;
	`}

	@media screen and ( min-width: 768px ) {
		padding: ${props => props.one ? '10px' : '10px 30px'};
		${props => props.all && css`
			padding-top: 20px;
			padding-bottom: 20px;
			margin-bottom: 10px;
		`}
		${props => props.one && css`
			align-items: center;
		`}
	}
`;

const DealerText = styled.span`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
`;

const DealerName = styled.span<{ theme: ThemeType, one?: boolean, all?: boolean }>`
	display: block;
	color: #4D4D4D;
	font-size: ${props => props.one ? props.theme.font.size.dealers.one.title.xs : props.theme.font.size.dealers.default.title.xs};
	line-height: ${props => props.one ? props.theme.font.lineHeight.dealers.one.title.xs : props.theme.font.lineHeight.dealers.default.title.xs};
	font-weight: ${props => props.one ? 'normal' : 'bold'};
	${props => props.all && css`
		font-size: ${props => props.theme.font.size.dealers.main.title.xs};
		line-height: ${props => props.theme.font.lineHeight.dealers.main.title.xs};
	`}
	@media screen and ( min-width: 768px ) {
		font-weight: bold;
		font-size: ${props => props.all ? props.theme.font.size.dealers.main.title.md : props.theme.font.size.dealers.default.title.md};
		line-height: ${props => props.all ? props.theme.font.lineHeight.dealers.main.title.md : props.theme.font.lineHeight.dealers.default.title.md};
	}
`;

const DealerAddress = styled.span<{ theme: ThemeType, one?: boolean, all?: boolean }>`
	margin-top: -1px;
	display: block;
	color: #6B6B6B;
	font-size: ${props => props.one ? props.theme.font.size.dealers.one.subtitle.xs : props.theme.font.size.dealers.default.subtitle.xs};
	line-height: ${props => props.one ? props.theme.font.lineHeight.dealers.one.subtitle.xs : props.theme.font.lineHeight.dealers.default.subtitle.xs};

	@media screen and ( min-width: 768px ) {
		font-size: ${props => props.theme.font.size.dealers.default.subtitle.md};
		line-height: ${props => props.theme.font.lineHeight.dealers.default.subtitle.md};
		${props => props.all && css`
			display: none;
		`}
	}
`;

export {
	Dealer,
	DealerInput,
	DealerCheck,
	DealerCheckIcon,
	DealerLabel,
	DealerText,
	DealerName,
	DealerAddress
}