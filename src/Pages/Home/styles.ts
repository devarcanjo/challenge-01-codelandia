import styled from 'styled-components';

export const Container = styled.main`
	padding: 6.25rem 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.125rem;

	@media (max-width: 47.75rem) {
		padding: 4rem;
	}

	@media (max-width: 37.5rem) {
		padding: 2.5rem 1.5rem;
		gap: 2.5rem;
	}
`;
