import { useState } from 'react'
import HeaderBar from '../../components/HeaderBar/headerBar'

function Home() {
  const [search, setSearch] = useState('')

  return (
    <>
      <HeaderBar
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
    </>
  )
}
export default Home
