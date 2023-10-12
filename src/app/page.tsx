import { Grid, Heading } from '@radix-ui/themes'
import { Suspense } from 'react'
import ArticleList from './ArticleList'

export default async function Home() {
  return (
    <Grid gap={'6'}>
      <Heading>Home page</Heading>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleList />
      </Suspense>
    </Grid>
  )
}
