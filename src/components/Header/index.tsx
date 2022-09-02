import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { CartButton } from '../CartButton'
import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Header() {
  const { purple } = useTheme()
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <div>
        <div>
          <MapPin weight="fill" size={20} color={purple} />
          <p>Mariana, MG</p>
        </div>
        <CartButton variant="yellow" />
      </div>
    </HeaderContainer>
  )
}
