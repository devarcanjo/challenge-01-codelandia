import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type FavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isFavorite: boolean;
};

function FavoriteButton({ isFavorite, ...props }: FavoriteButtonProps) {
	const ariaLabelText = isFavorite ? 'Desfavoritar' : 'Favoritar';
	return (
		<S.Button
			type="button"
			isFavorite={isFavorite}
			aria-label={ariaLabelText}
			{...props}
		>
			<svg
				stroke="#574AE8"
				fill="transparent"
				strokeWidth="2"
				viewBox="0 0 24 24"
				strokeLinecap="round"
				strokeLinejoin="round"
				height="24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</svg>
		</S.Button>
	);
}

export default FavoriteButton;
