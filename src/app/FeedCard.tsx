import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'

type Props = {
  title?: string
  date?: string
  snippet?: string
  link?: string
  source?: string
}

export function FeedCard({ title, date, snippet, link, source }: Props) {
  const formattedDate = date
    ? Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
    : null

  return (
    <Card key={link}>
      <Flex align="center" justify="between">
        <Box>
          <Heading as="h2" size="4">
            <Link href={link ?? ''}>{title}</Link>
          </Heading>
          {formattedDate && <Text size="2">{formattedDate}</Text>}
          <Text size="2">{snippet}</Text>
          <Text size="2">{source}</Text>
        </Box>
      </Flex>
    </Card>
  )
}
