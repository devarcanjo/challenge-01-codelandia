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

  const handleFavorite = (id: number) => {
    const updateArticles = articles.map(article =>
      article.id === id
        ? { ...article, isFavorite: !article.isFavorite }
        : article
    )

    setArticles(updateArticles)
  }

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
            key={article.id}
            onFavorite={() => handleFavorite(article.id)}
            {...article}
          />
        ))}
      </S.Container>
    </>
  )
}

export default Home
