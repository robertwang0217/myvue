<template lang="html">
	<div id='appModule'>
		<div style="padding-top:20px">
			<b-row>
				<b-col cols="3">
					<Sidebar></Sidebar>
				</b-col>
				<b-col cols="9">
					<Map></Map>
				</b-col>
			</b-row>
		</div>
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
