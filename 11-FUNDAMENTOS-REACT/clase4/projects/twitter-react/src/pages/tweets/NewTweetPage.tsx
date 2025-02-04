import { useEffect, useRef, useState } from 'react'
import Page from '../../components/layaout/Page'
import './NewTweetPage.css'

const MAX_CHARACTERS = 140

function NewTweetPage() {
  const [content, setContent] = useState('')
  const renders = useRef(0)
  const timeout = useRef<number | undefined>(undefined)
  const buttonRef = useRef<HTMLButtonElement>(null)
  renders.current++
  useEffect(() => {
    timeout.current = setTimeout(() => {
      console.log('timeout')
    }, 10000)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])
  console.log(timeout.current)

  useEffect(() => {
    console.log(buttonRef.current)
  }, [])
  return (
    <Page title='What are you thinking?'>
      <div className='newTweetPage'>
        <div>
          <Photo />
        </div>
        <form className='newTweetPage-form'>
          <Textarea
            className='newTweetPage-textarea'
            placeholder="Hey! What's up!"
            maxLength={MAX_CHARACTERS}
            value={content}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setContent(event.target.value)
            }}
          />
          <div className='newTweetPage-footer'>
            <span className='newTweetPage-characters'></span>
            <Button
              type='submit'
              className='newTweetPage-submit'
              $variant='primary'
              ref={buttonRef}
            >
              Let's go!
            </Button>
          </div>
        </form>
      </div>
    </Page>
  )
}

export default NewTweetPage
