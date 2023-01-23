import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const Anecdoteform = () => {
    const dispatch = useDispatch()

    const createNewAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`New anecdote: "${content}" added.`, 5))
      }
    return (
    <div>
        <h2>create new</h2>
    <form onSubmit={createNewAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
      </div>)
}

export default Anecdoteform