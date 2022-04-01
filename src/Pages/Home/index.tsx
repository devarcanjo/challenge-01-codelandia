import { useState } from 'react'
import Card from '../../components/Card'
import HeaderBar from '../../components/HeaderBar/headerBar'
import * as S from './styles'

function Home() {
  const [search, setSearch] = useState('')

  return (
    <>
      <HeaderBar
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <S.Container>
        <Card
          date={''}
          isFavorite={false}
          title={''}
          paragraph={''}
          onFavorite={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </S.Container>
    </>
  )
}
export default Home
