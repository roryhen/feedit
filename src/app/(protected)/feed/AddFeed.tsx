import {
  Box,
  Flex,
  IconButton,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
} from '@radix-ui/themes'
import { addFeed } from './actions'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export function AddFeed() {
  return (
    <form action={addFeed}>
      <Flex gap="2">
        <Box grow="1">
          <TextFieldRoot>
            <TextFieldInput name="url" placeholder="Feed url" />
            <TextFieldSlot>
              <IconButton variant="ghost" size="1">
                <MagnifyingGlassIcon />
              </IconButton>
            </TextFieldSlot>
          </TextFieldRoot>
        </Box>
      </Flex>
    </form>
  )
}
