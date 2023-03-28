const app = Vue.createApp({
	data() {
		return {
            showImg: false,
			message: 'Ciao Signori',
            imgSrc: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTc0MzMxNjUzNjM0NzI5NjA2/donald-trump-gettyimages-687193180.jpg'
		}
	},
    methods: {
        toggleShowImg() {
            this.showImg = !this.showImg
        }

    }
});

app.mount('#app');