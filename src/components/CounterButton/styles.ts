import styled from 'styled-components'

export const CounterButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 8.5px 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  align-items: center;

  button {
    display: flex;
    align-content: center;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  p {
    width: 20px;
    font-size: 16px;
    color: ${({ theme }) => theme['base-text']};
  }
`
