// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const BoxFooterWrapper = styled.div`
	margin: 15px 0 0;
`;

const BoxFooterProtect = styled.p`
	color: #4D4D4D;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	margin: 0;
`;

const BoxFooterIcon = styled.svg<{ theme: ThemeType }>`
	width: 18px;
	height: 18px;
	margin: -5px 10px -5px 0;
	fill: ${props => props.theme.background.form.protect};
`;

const BoxFooterTCPA = styled.p<{ theme: ThemeType }>`
	margin: 15px 0 0;
	color: ${props => props.theme.colors.text};
	font-size: 12px;
	line-height: 16px;
	a {
		color: #2566B4;
		text-decoration: underline;
	}
`;

export {
	BoxFooterWrapper,
	BoxFooterProtect,
	BoxFooterIcon,
	BoxFooterTCPA
}