import styled from 'styled-components'
import background from '../../assets/background.png'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    width: 100vw;
    height: 544px;
    background: url(${background}) no-repeat center;
    background-size: cover;

    div {
      max-width: 1120px;
    }
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 54px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 130%;
  }
`

export const CoffeesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 52px 32px;
  margin: 0 auto;
`
