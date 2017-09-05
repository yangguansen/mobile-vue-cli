import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@/App';

const Main = r => require.ensure( [], () => r( require( '@/page/main/index' ) ), 'index' );
const One = r => require.ensure( [], () => r( require( '@/page/main/one' ) ), 'one' );
const Two = r => require.ensure( [], () => r( require( '@/page/main/two' ) ), 'two' );

Vue.use( VueRouter );

const routes = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		redirect: '/main/one',
		component: Main,
		children: [
			{
				path: 'one',
				component: One
			},
			{
				path: 'two',
				component: Two
			}
		]
	}

];

const router = new VueRouter( {
	routes
} );
export default router;