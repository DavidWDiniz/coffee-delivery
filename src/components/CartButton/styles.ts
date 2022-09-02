import styled, { css } from 'styled-components'
import { CartButtonProps } from './index'

export const CartButtonContainer = styled.button<CartButtonProps>`
  position: relative;
  display: flex;
  align-content: center;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;

  ${({ variant, theme }) => css`
    color: ${variant === 'purple' ? theme.white : theme['yellow-dark']};
    background: ${variant === 'purple'
      ? theme['purple-dark']
      : theme['yellow-light']};
  `}

  &:hover {
    background: ${({ variant, theme }) => variant === 'purple' && theme.purple};
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8.5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme['yellow-dark']};

  p {
    text-align: center;
    color: ${({ theme }) => theme.white};
  }
`
