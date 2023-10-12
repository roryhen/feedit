
import { AddFeed } from './AddFeed'
import { Suspense } from 'react'
import FeedList from './FeedList'
import { Grid, Heading } from '@radix-ui/themes'

export default function Settings () {
  return (
    <Grid gap='6'>
      <Heading>Settings Page</Heading>
      <AddFeed />
      <Suspense fallback={<div>Loading...</div>}>
        <FeedList />
      </Suspense>
    </Grid>
  )
}
