import { KEY_FEEDS, get } from '@/lib/store'
import { Grid } from '@radix-ui/themes'
import Parser from 'rss-parser'
import { FeedCard } from './FeedCard'

const parser = new Parser()

async function getArticles() {
  const feeds = (await get(KEY_FEEDS)) as string[]

  if (!feeds) {
    return []
  }

  const sourcePromises = feeds.map((feedUrl) => {
    return parser.parseURL(feedUrl)
  })

  const feedsResolved = await Promise.all(sourcePromises)

  return feedsResolved
    .flatMap(({ title, items }) => {
      return items
        .map((item) => {
          return {
            title: item.title,
            date: item.pubDate ?? '',
            snippet: item.contentSnippet?.slice(0, 300),
            link: item.link,
            source: title,
          }
        })
        .slice(0, 5)
    })
    .sort((a, b) => {
      return new Date(b?.date).getTime() - new Date(a?.date).getTime()
    })
}

export default async function ArticleList() {
  const articles = await getArticles()

  return (
    <Grid gap={'4'}>
      {articles.map(({ title, date, snippet, link, source }) => {
        return (
          <FeedCard
            key={title}
            title={title}
            date={date}
            snippet={snippet}
            link={link}
            source={source}
          />
        )
      })}
    </Grid>
  )
}
