<template>
    <div class="subjects_layout">
        <nav-bar/>
        <nuxt/>
        <template-subject/>
    </div>
</template>

<script>
    import navBar from '../components/navbar'
    import templateSubject from '../pages/subjects/template'

	export default {
		components:{navBar, templateSubject}
	}
</script>

<style lang='scss' scoped>

</style>
