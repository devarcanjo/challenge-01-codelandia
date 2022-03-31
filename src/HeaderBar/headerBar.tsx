import * as S from './styles'
import searchIcon from 'assets/searchIcon.svg'

const HeaderBar = ({ ...props }: InputProps) => {
  return (
    <S.Header>
      <div>
        <h1>Codelândia</h1>
        <span>blog</span>
      </div>
    </S.Header>
  )
}

export default HeaderBar
