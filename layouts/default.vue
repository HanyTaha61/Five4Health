<template>
  <div>
    <nav-bar/>
    <Nuxt/>
    <Footers/>
  </div>
</template>

<script>
import navBar from '../components/navbar'
import Footers from '../components/footer'
	export default {
		components:{navBar, Footers}
	}
</script>

<style lang='scss' scoped>

</style> 
