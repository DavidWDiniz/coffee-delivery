import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react'
import { CartButtonContainer, Counter } from './styles'
import { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'

export interface CartButtonProps {
  variant?: 'purple' | 'yellow'
}

export function CartButton({ variant = 'purple' }: CartButtonProps) {
  const { total, addToCart } = useContext(CounterContext)
  return (
    <CartButtonContainer variant={variant} onClick={addToCart}>
      {variant === 'purple' ? (
        <ShoppingCartSimple size={20} weight="fill" />
      ) : (
        <ShoppingCart size={20} weight="fill" />
      )}
      {!!total && variant === 'yellow' && (
        <Counter>
          <p>{total}</p>
        </Counter>
      )}
    </CartButtonContainer>
  )
}
