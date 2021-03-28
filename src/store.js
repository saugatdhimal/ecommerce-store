import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

function saveToLocalStorage(state){
    try {
       const serializedState = JSON.stringify(state)
       localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools())

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store