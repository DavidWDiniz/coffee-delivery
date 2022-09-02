import styled from 'styled-components'

export const TagContainer = styled.main`
  padding: 4px 8px;
  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 100px;
  margin-bottom: 16px;

  p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme['yellow-dark']};
  }
`
