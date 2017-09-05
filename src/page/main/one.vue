<template>
	<div class="one">One</div>
</template>


<script type="application/ecmascript">
	import axios from 'axios';

	export default {
		data() {
			return {};
		},
		methods: {
			async test() {
				console.log( 11111111 );
			}
		},
		async created() {
			await this.test();
		}
	};
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>