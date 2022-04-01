import { useEffect, useState } from 'react'

import Card from '../../components/Card'
import HeaderBar from '../../components/HeaderBar/headerBar'

import formatDate from '../../utils/formatDate'

import dataArticles from '../../assets/articles.json'

import * as S from './styles'

type ArticleProps = {
  id: number
  date: string
  isFavorite: boolean
  title: string
  paragraph: string
}

function Home() {
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState<ArticleProps[]>([])
  const [filteredArticles, setFilteredArticles] = useState<ArticleProps[]>([])

  useEffect(() => {
    const formattedData = dataArticles.map(article => ({
      ...article,
      date: formatDate(article.date)
    }))

    setArticles(formattedData)
  }, [])

  useEffect(() => {
    if (!articles) return

    const searchLowercase = search.toLocaleLowerCase()

    const filterArticle = articles.filter(
      article =>
        article.title.toLowerCase().includes(searchLowercase) ||
        article.date.toLowerCase().includes(searchLowercase) ||
        article.paragraph.toLowerCase().includes(searchLowercase)
    )

    setFilteredArticles(filterArticle)
  }, [articles, search])
  return (
    <>
      <HeaderBar
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <S.Container>
        {filteredArticles.map(article => (
          <Card
            date={''}
            isFavorite={false}
            title={''}
            paragraph={''}
            onFavorite={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        ))}
      </S.Container>
    </>
  )
}
export default Home
