import styled, { css } from 'styled-components';

const StepBoxWrapper = styled.div<{ one?: boolean, active?: string }>`
	box-shadow: 0 2px 11px 1px rgba( 0, 0, 0, .37 );
	border-radius: 7px;
	overflow: hidden;
	${props => !props.one ? css`
		> div {
			> div {
				box-shadow: none;
				border-radius: 0;
			}
		}

		.s2-dealers, .s2-form {
			width: 100%;
		}
		.s2-dealers-enter {
			position: absolute;
			transform: translateX( -100% );
		}
		.s2-dealers-enter-active {
			transform: translateX( 0% );
			transition: all ease .3s;
		}
		.s2-dealers-exit {
			position: absolute;
		}
		.s2-dealers-exit-active {
			transform: translateX( -100% );
			transition: all ease .3s;
		}

		.s2-form-enter {
			transform: translateX( 100% );
		}
		.s2-form-enter-active {
			transform: translateX( 0% );
			transition: all ease .3s;
		}
		.s2-form-exit {
		}
		.s2-form-exit-active {
			transform: translateX( 100% );
			transition: all ease .3s;
		}
	` : css`
		> div {
			width: 100%;
			box-shadow: none;
			border-radius: 0;
			transition: transform ease .3s;
			&:last-child {
				position: absolute;
				transform: translateX( 100% );
			}
			${props.active === 'form' && css`
				&:first-child {
					position: absolute;
					transform: translateX( -100% );
				}
				&:last-child {
					position: relative;
					transform: translateX( 0 );
				}
			`}
		}

		@media screen and ( min-width: 768px ) {
			> div {
				transition: none;
				&:first-child {
					button {
						display: none;
					}
				}
				&:not(:first-child) {
					&:before {
						content: '';
						position: absolute;
						top: 0;
						left: 30px;
						right: 30px;
						height: 1px;
						background: #B7B9C6;
					}
				}
				&:first-child, &:last-child {
					position: relative;
					transform: translateX( 0 );
				}
			}
		}
	`}
`;

export {
	StepBoxWrapper
};