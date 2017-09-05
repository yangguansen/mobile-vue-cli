<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="less">
	.app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	h1, h2 {
		font-weight: normal;
	}

    a{
        color: #000;
        text-decoration: none;
    }
</style>
