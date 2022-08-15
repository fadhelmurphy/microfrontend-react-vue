import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'


const mount = (el) => {
    const history = createBrowserHistory()

    ReactDOM.render(
        <App history={history} />,
        el.selector
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = {selector:document.querySelector('#hello-react-dev-app')}
    if (devRoot.selector) {
        mount(devRoot)
    }
}

export { mount }