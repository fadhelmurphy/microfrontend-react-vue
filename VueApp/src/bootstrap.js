import { createApp } from 'vue'
import App from './App'

const mount = (el) => {
    const app = createApp(App, {})
    app.mount(el.selector)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = {selector: document.querySelector('#hello-vue-dev-app')}
    if (devRoot.selector) {
        mount(devRoot)
    }
}

export { mount }