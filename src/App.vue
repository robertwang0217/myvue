<template lang="html">
	<div id='appModule'>
		<b-container>
			<b-row>
				<b-col cols="2">
					<Sidebar></Sidebar>
				</b-col>
				<b-col cols="10">
					<Map></Map>
				</b-col>
			</b-row>
		</b-container>
	</div>    
</template>

<script>

import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

export default {
  name: 'App',
  components: { Map, Sidebar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
