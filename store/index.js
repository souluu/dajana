import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const appInitialState = {
    homepage: {
        title: 'welcome to dajana',
        button: [
            {
                buttonID: 'you yun',
                link: 'sdfd'
            }
        ]
    },
    aboutUs: {
        title: 'This is the about page'
    }
}

// REDUCERS
export const reducer = (state = appInitialState, action) => {
    return state
}

export function initializeStore(initialState = appInitialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
