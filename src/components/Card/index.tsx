import { CardContainer, Footer } from './styles'
import { Tag } from '../Tag'
import { CounterButton } from '../CounterButton'
import { CartButton } from '../CartButton'

interface CardProps {
  id: number
  image: string
  alt: string
  title: string
  description: string
  tags: string[]
  price: number
}

export function Card({
  price,
  tags,
  description,
  title,
  id,
  image,
  alt,
}: CardProps) {
  return (
    <CardContainer>
      <img src={image} alt={alt} />
      <div>
        {tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
      <span>{title}</span>
      <p>{description}</p>
      <Footer>
        <p>
          R$ <span>{price.toFixed(2).toString().replaceAll('.', ',')}</span>
        </p>
        <CounterButton id={id} />
        <CartButton variant="purple" />
      </Footer>
    </CardContainer>
  )
}
