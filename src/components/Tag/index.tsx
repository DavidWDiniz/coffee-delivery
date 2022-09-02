import { TagContainer } from './styles'

interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <TagContainer>
      <p>{title}</p>
    </TagContainer>
  )
}
