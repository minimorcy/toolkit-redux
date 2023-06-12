import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
    const { counter } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <p>count is {counter}</p>
            <div className="card">
                <button onClick={() => { dispatch(increment()) }}>
                Increment
                </button>
                <button onClick={() => { dispatch(incrementBy(2)) }}>
                Increment by 2
                </button>
                <button onClick={() => { dispatch(decrement()) }}>
                Decrement
                </button>
            </div>
        </>
    )
}

export default App
