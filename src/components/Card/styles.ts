import styled, { css } from 'styled-components';

export const Card = styled.article`
	${({ theme }) => css`
		padding: 1.5rem;
		width: clamp(18rem, 100%, 56.25rem);
		background: ${theme.colors.white};
		box-shadow: 0 0 0.625rem rgba(19, 19, 31, 0.05);
		border-radius: 0.3125rem;
		font-family: ${theme.fonts.LexendDeca};

		header {
			margin-bottom: 1.5rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			span {
				color: ${theme.colors.gray};
			}
		}

		h2 {
			margin-bottom: 0.5rem;
			font-size: 1.625rem;
			font-weight: 400;
			font-family: ${theme.fonts.LexendDeca};
			color: ${theme.colors.gray800};
		}

		p {
			font-size: 1.125rem;
			font-family: ${theme.fonts.LexendDeca};
			color: ${theme.colors.gray};
		}

		@media (max-width: 47.75rem) {
			header span {
				font-size: 0.875rem;
			}

			h2 {
				font-size: 1.5rem;
			}

			p {
				font-size: 1rem;
			}
		}

		@media (max-width: 37.5rem) {
			h2 {
				font-size: 1.25rem;
			}

			p {
				font-size: 0.875rem;
			}
		}
	`}
`;
