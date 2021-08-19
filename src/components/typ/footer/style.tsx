// Packages
import styled from 'styled-components';

const FooterWrapper = styled.div`
	border-top: 1px solid #dce3ef;
    padding: 32px 15px;
`;
const FooterUsage = styled.p`
	text-align: center;
    margin: 0 0 15px;
    font-size: 12px;
    line-height: 14px;
    color: #6B6B6B;
	a {color: #0080cc;}
`;
const FooterLink = styled.a`
	color: #4d4d4d;
    text-decoration: none;
`;
const FooterText = styled.p`
	text-align: center;
    margin: 0;
    font-size: 12px;
    line-height: 14px;
    color: #6B6B6B;
	&:last-child {
		margin-top: 5px;
	}
`;

export {
	FooterWrapper, FooterLink, FooterText, FooterUsage
};