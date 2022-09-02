import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 310px;
  padding: 0 20px 20px 20px;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme['base-card']};

  img {
    width: 120px;
    height: 120px;
    margin-top: -1.5rem;
    margin-bottom: 12px;
  }

  div {
    display: flex;
    gap: 4px;
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme['base-label']};
    font-size: 14px;
    text-align: center;
  }
`

export const Footer = styled.footer`
  margin-top: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme['base-text']};

    span {
      font-size: 24px;
      margin-right: 23px;
    }
  }

  div {
    margin-right: 8px;
  }
`
