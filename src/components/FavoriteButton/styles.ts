import styled, { css } from 'styled-components'

import { rgba } from 'polished'

type ButtonProps = {
  isFavorite: boolean
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, isFavorite }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;

    svg {
      fill: ${isFavorite ? theme.colors.purple : 'transparent'};
      transition: all 0.15s ease-out;
    }

    &:hover svg {
      fill: ${rgba(theme.colors.purple, 0.5)};
    }

    &:before,
    &:after {
      position: absolute;
      visibility: hidden;
      transition: all 0.15s ease-out;
      opacity: 0;
      pointer-events: none;
    }

    &:before {
      content: '';
      top: -0.575rem;
      border-style: solid;
      border-width: 0.625rem 0.5rem 0 0.5rem;
      border-color: transparent;
      border-top-color: ${theme.colors.purple};
    }

    &:after {
      content: attr(aria-label);
      top: -2.3125rem;
      right: -100%;
      height: 1.75rem;
      width: 7.75rem;
      display: grid;
      place-items: center;
      background: ${theme.colors.purple};
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-family: ${theme.fonts.LexendDeca};
      letter-spacing: 0.02em;
      color: ${theme.colors.white};
    }

    @media (hover: hover) {
      &:hover {
        &:before,
        &:after {
          visibility: visible;
          opacity: 1;
        }

        &:before {
          top: -0.8875rem;
        }

        &:after {
          top: -2.625rem;
        }
      }
    }
  `}
`
