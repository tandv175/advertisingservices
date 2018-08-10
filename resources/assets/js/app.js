

require('./bootstrap');

window.Vue = require('vue');


// Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

const app = new Vue({
    el: '#app',
    // created(){
    // 	console.log('Hello World')
    // }
    components:{Myheader,Myfooter}
});
