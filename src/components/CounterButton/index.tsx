import { Minus, Plus } from 'phosphor-react'
import { CounterButtonContainer } from './styles'
import { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

interface CounterButtonProps {
  id: number
}

export function CounterButton({ id }: CounterButtonProps) {
  const { increment, decrement, coffees } = useContext(CounterContext)

  return (
    <CounterButtonContainer>
      <button onClick={() => decrement(id)}>
        <Minus weight="bold" size={14} />
      </button>
      <p>{coffees[id].counter}</p>
      <button onClick={() => increment(id)}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterButtonContainer>
  )
}
