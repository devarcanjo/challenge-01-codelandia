import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function HeaderBar({ ...props }: InputProps) {
  return (
    <S.Header>
      <div>
        <h1>Codelândia</h1>
        <span>blog</span>
      </div>

      <S.InputWrapper>
        <input type="text" placeholder="Pesquisar no Blog" {...props} />
      </S.InputWrapper>
    </S.Header>
  )
}

export default HeaderBar
