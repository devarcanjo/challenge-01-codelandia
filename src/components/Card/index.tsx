import FavoriteButton from '../FavoriteButton'
import * as S from './styles'

type cardProps = {
  date: string
  isFavorite: boolean
  title: string
  paragraph: string
  onFavorite: () => void
}

function Card({ date, isFavorite, title, paragraph, onFavorite }: cardProps) {
  return (
    <S.Card>
      <header>
        <span>{date}</span>
        <FavoriteButton isFavorite={isFavorite} onClick={onFavorite} />
      </header>
      <h2>{title}</h2>
      <p> {paragraph} </p>
    </S.Card>
  )
}
export default Card
