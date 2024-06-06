import { Grid, Heading } from '@radix-ui/themes'
import { Suspense } from 'react'
import ArticleList from './ArticleList'

export default function Settings() {
  return (
    <Grid gap="6">
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleList />
      </Suspense>
    </Grid>
  )
}
