import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const onChange = (event) => {
        event.preventDefault()
        const filter = event.target.value
        dispatch(setFilter(filter))
    }
    const style = {
        marginBottom: 10
      }
    return(
        <div style={style}>
            Filter
            <input name='filter' onChange={onChange} />
        </div>
    )
}

export default Filter