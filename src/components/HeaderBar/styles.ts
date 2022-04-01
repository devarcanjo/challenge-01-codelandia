import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		padding: 2.5rem 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: ${theme.colors.gradient};

		div:first-child {
			margin-bottom: 4.375rem;
			width: clamp(18rem, 100%, 56.25rem);
			display: flex;
			justify-content: space-between;

			h1,
			span {
				font-size: 1.5rem;
				font-weight: 400;
				font-family: ${theme.fonts.LexendDeca};
				color: ${theme.colors.white};
			}
		}

		@media (max-width: 47.75rem) {
			div:first-child {
				margin-bottom: 3rem;

				h1,
				span {
					font-size: 1.25rem;
				}
			}
		}

		@media (max-width: 37.5rem) {
			padding: 2.5rem 1.5rem;

			div:first-child {
				margin-bottom: 2.5rem;

				h1,
				span {
					font-size: 1.125rem;
				}
			}
		}
	`}
`;

export const InputWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		width: clamp(18rem, 100%, 56.25rem);
		display: flex;
		align-items: center;

		img {
			position: absolute;
			left: 1.25rem;
		}

		input {
			padding: 0 4rem;
			height: 4rem;
			width: 100%;
			background: rgba(255, 255, 255, 0.2);
			border: 0.125rem solid transparent;
			border-radius: 0.3125rem;
			font-size: 1.125rem;
			font-family: ${theme.fonts.Inter};
			color: ${theme.colors.white};
			outline: none;
			transition: border-color 0.15s ease-out;

			&::placeholder {
				color: rgba(255, 255, 255, 0.5);
			}

			&:focus {
				border-color: ${theme.colors.white};
			}
		}

		@media (max-width: 47.75rem) {
			img {
				height: 1.625rem;
			}

			input {
				height: 3.5rem;
				font-size: 1rem;
			}
		}

		@media (max-width: 37.5rem) {
			img {
				height: 1.5rem;
			}

			input {
				height: 3rem;
				font-size: 1rem;
			}
		}
	`}
`;
