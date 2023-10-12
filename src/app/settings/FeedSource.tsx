import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes'
import RemoveFeed from './RemoveFeed'

type Props = {
  title?: string
  description?: string
  link?: string
  url: string
}

export function FeedSource({ title, description, link, url }: Props) {
  return (
    <Card key={url}>
      <Flex align="center" justify="between">
        <Box>
          <Heading as="h2" size="4">
            <Link href={link ?? ''}>{title}</Link>
          </Heading>
          <Text size="2">{description}</Text>
        </Box>
        <RemoveFeed feedId={url} />
      </Flex>
    </Card>
  )
}
