import { Grid } from '@radix-ui/themes'
import Parser from 'rss-parser'
import { FeedSource } from './FeedSource'
import { getFeeds } from '@/lib/server/feed-store'

const parser = new Parser()

async function getFeedInfo() {
  const feeds = await getFeeds()

  if (!feeds) {
    return []
  }

  const sourcePromises = feeds.map((feedUrl) => {
    return parser.parseURL(feedUrl)
  })

  const resolvedFeeds = await Promise.all(sourcePromises)
  const sourceFeeds = []

  for (let i = 0; i < resolvedFeeds.length; i++) {
    const { title, description, link } = resolvedFeeds[i]
    sourceFeeds.push({ title, description, link, url: feeds[i] })
  }

  return sourceFeeds
}

export default async function FeedList() {
  const feeds = await getFeedInfo()

  return (
    <Grid gap="4">
      {feeds.map((feed) => {
        console.log('feed url', feed.url)
        return (
          <FeedSource
            key={feed.url}
            title={feed.title}
            description={feed.description}
            link={feed.link}
            url={feed.url}
          />
        )
      })}
    </Grid>
  )
}
