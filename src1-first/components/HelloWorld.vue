<template>
	<div class="item">
		{{msg}}
	</div>
</template>

<script>
	export default {
	  data() {
			return {
				msg:'Hello World'
			}
		},
	}
</script>

<style scoped>
  .item{
		font-size: 30px;
		color: red;
	}
</style>