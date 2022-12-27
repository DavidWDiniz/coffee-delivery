import { Card } from '../../components/Card'
import { useContext } from 'react'

import { CoffeesContainer, CoffeesWrapper, HomeContainer } from './styles'
import { CounterContext } from '../../contexts/CounterContext'

export function Home() {
  const { coffees } = useContext(CounterContext)

  return (
    <HomeContainer>
      {/*<section>*/}
      {/*  <div>*/}
      {/*    <p>dafsaf</p>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <CoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeesWrapper>
          {coffees &&
            coffees.map((coffee) => (
              <Card
                key={coffee.id}
                id={coffee.id}
                title={coffee.title}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                image={coffee.image}
                alt={coffee.alt}
              />
            ))}
        </CoffeesWrapper>
      </CoffeesContainer>
    </HomeContainer>
  )
}
