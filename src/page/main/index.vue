<template>
    <div class="main">
        <div class="tab">
            <router-link to="./one">One</router-link>
            <router-link to="./two">Two</router-link>
        </div>
        <div class="section">
            <router-view></router-view>
        </div>

    </div>
</template>



<script type="application/ecmascript">
    export default {
		data() {
			return {};
		}
	};
</script>

<style type="text/less" lang="less" scoped>
.main{
    width: 100%;
    .tab{
        width: 100%;
        height:50px;
        background: #2c3e50;
        a{
            display: inline-block;
            width: 50%;
            float: left;
            font-size: 15px;
        }
    }
    .section{
        background: #883322;
        position: absolute;
        top: 50px;
        width: 100%;
        z-index: 2;
    }
}
</style>