import { Box, Button, Flex, TextFieldInput } from '@radix-ui/themes'
import { addFeed } from './actions'

export function AddFeed() {
  return (
    <form action={addFeed}>
      <Flex gap="2">
        <Box grow="1">
          <TextFieldInput name="url" placeholder="Feed url" />
        </Box>
        <Button>Add feed</Button>
      </Flex>
    </form>
  )
}
