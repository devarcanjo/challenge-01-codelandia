import FavoriteButton from '../FavoriteButton'

import * as S from './styles'
import ScrollReveal from '../ScrollReveal'

type CardProps = {
  date: string
  isFavorite: boolean
  title: string
  paragraph: string
  onFavorite: () => void
}

function Card({ date, isFavorite, title, paragraph, onFavorite }: CardProps) {
  return (
    <S.Card>
      <header>
        <ScrollReveal delay={400}>
          <span>{date}</span>
        </ScrollReveal>
        <FavoriteButton isFavorite={isFavorite} onClick={onFavorite} />
      </header>
      <ScrollReveal delay={500}>
        <h2>{title}</h2>
      </ScrollReveal>
      <ScrollReveal delay={600}>
        <p> {paragraph} </p>
      </ScrollReveal>
    </S.Card>
  )
}
export default Card
