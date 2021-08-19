// Packages
import styled from 'styled-components';
import { ThemeType } from '@/def/TTheme';

const AdvantagesWrapper = styled.div`
	display: none;

	@media screen and ( min-width: 768px ) {
		display: flex;
		justify-content: center;
		margin-top: 25px;
	}
`;

const Advantage = styled.p`
	@media screen and ( min-width: 768px ) {
		margin: 0;
		&:not(:last-child) {
			margin-right: 30px;
		}
	}
`;

const AdvantageTitle = styled.span<{ theme: ThemeType }>`
	@media screen and ( min-width: 768px ) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 54px;
		height: 18px;
		border-radius: 18px;
		background: #EDEEF1;
		padding-left: 16px;
		padding-right: 2px;
		font-size: 12px;
		line-height: 16px;
		color: ${props => props.theme.colors.primary};
		margin: 0 auto 7px;
		&:before {
			content: '';
			position: absolute;
			top: 2px;
			left: 2px;
			width: 14px;
			height: 14px;
			background: ${props => props.theme.colors.primary};
			border-radius: 14px;
		}
	}
`;

const AdvantageIcon = styled.svg`
	@media screen and ( min-width: 768px ) {
		position: absolute;
		top: 6px;
		left: 6px;
		width: 6px;
		height: 6px;
		fill: #FFF;
	}
`;

const AdvantageText = styled.span`
	@media screen and ( min-width: 768px ) {
		display: block;
		font-size: 12px;
		line-height: 16px;
		color: #787878;
		text-align: center;
	}
`;

export {
	AdvantagesWrapper,
	Advantage,
	AdvantageTitle,
	AdvantageIcon,
	AdvantageText
};