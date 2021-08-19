// Packages
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// Definitions
import { ICue } from '@/def/ICue';

// Style
import { DirectionalCue } from './style';

const Cue: React.FC<ICue> = (props) => {
	const themeContext = useContext(ThemeContext);
	return (
		<DirectionalCue dealers={props.dealers} viewBox="0 0 18 21">
			<defs>
				<linearGradient id="a" y1="1" x2="1" y2="1" gradientUnits="objectBoundingBox">
					<stop offset="0" stopColor={themeContext.background.cue.secondary} />
					<stop offset="1" stopColor={themeContext.background.cue.default}/>
				</linearGradient>
			</defs>
			<path d="M16.889,13.359,9.446,20.367a2.338,2.338,0,0,1-.505.362.9.9,0,0,1-.3.136,1.4,1.4,0,0,1-.286.09.786.786,0,0,1-.32.045H2.155C.977,21,0,19.712,0,18.107V2.893C0,1.288.977,0,2.155,0H8.032a.786.786,0,0,1,.32.045,1.4,1.4,0,0,1,.286.09.9.9,0,0,1,.3.136,2.338,2.338,0,0,1,.505.362l7.442,6.985a4.264,4.264,0,0,1,0,5.742" fillRule="evenodd" fill="url(#a)"/>
		</DirectionalCue>
	);
};

export default Cue;