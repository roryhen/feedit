import { Box, Flex, Grid, Heading } from '@radix-ui/themes'
import { Suspense } from 'react'
import { AddFeed } from './AddFeed'
import FeedList from './FeedList'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Grid gap="5">
      <Heading>Feed</Heading>
      <Grid columns="2" gap="6">
        <Flex direction="column" gap="4">
          <AddFeed />
          <Suspense fallback={<div>Loading...</div>}>
            <FeedList />
          </Suspense>
        </Flex>
        <Box style={{ gridColumn: 'span 2' }}>{children}</Box>
      </Grid>
    </Grid>
  )
}
