import { IconButton, TextFieldInput } from '@radix-ui/themes'
import { removeFeed } from './actions'
import { ValueNoneIcon } from '@radix-ui/react-icons'

export default function RemoveFeed({ feedId }: { feedId: string }) {
  return (
    <form action={removeFeed}>
      <TextFieldInput type="hidden" name="feedId" value={feedId} />
      <IconButton type="submit" aria-label="Remove feed" variant="surface">
        <ValueNoneIcon />
      </IconButton>
    </form>
  )
}
