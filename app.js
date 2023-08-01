global.$ = global.jQuery = require('jquery');

import './config.js'
import '../../js/datetime.js'
import '../../js/jquery-confirm.js' 
import '../../js/jquery-msgpopup.js'
import '../../js/popup.js'

import { createApp } from 'vue'
import App from './components/App.vue'

import router from './router.js'

import { Posio } from './posio.js'
import { ApiClient } from '../../js/ps-api-client.js'
import { LocalDB } from './localdb.js'
import { Docs } from './docs.js'

let posio = new Posio(router);
let apiclient = ApiClient();
let localdb = new LocalDB();
let docs = new Docs();

await posio.init();
await localdb.init();
await docs.init();

const app = createApp({
    el: '#app',
})

app.component('App', App)
app.use(apiclient)
app.use(localdb)
app.use(docs)
// app.use(MLInstaller)
app.use(router)
app.use(posio)
// app.use(vuetify)
app.mount('#app')




