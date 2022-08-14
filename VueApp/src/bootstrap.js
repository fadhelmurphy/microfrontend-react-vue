import { createApp } from 'vue'
import App from './App'

const mount = (el) => {
    const app = createApp(App, {counter: el.config?.counter, update: (event)=> el.config?.update(event)})
    app.mount(el.selector)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = {selector: document.querySelector('#hello-vue-dev-app')}
    if (devRoot.selector) {
        mount(devRoot)
    }
}

export { mount }