import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding: 32px 0;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    > div {
      padding: 8px;
      border-radius: 6px;
      background: ${({ theme }) => theme['purple-light']};
      gap: 4px;

      p {
        font-size: 14px;
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }
`
