import { createApp } from 'vue';

const app = Vue.createApp({
	data() {
		return {
			message: 'Ciao Signori'
		}
	}
});

app.mount('#app');