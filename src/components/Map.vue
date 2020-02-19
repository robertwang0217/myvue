<template lang="html">
    <div id="mapModule">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <div id="map" style='width: 100%; height: 650px;'></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import sourceData from "../assets/files/testBlob.json";

export default {

    name: "Map",

    props: {

    },

    data: () => ({
    }),

    mounted() {
        var map = new this.$mapbox.Map({
            container: 'map',
            accessToken: "pk.eyJ1Ijoicm9iZXJ0d2FuZzAyMTciLCJhIjoiY2s2cnFhMmwzMDhkNzNvcWl5cjFpdXc5dCJ9.gAkCQbVUq9lQY76A368odg",
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [151.209862, -33.869334],
            zoom: 14,

        });
        
        map.on('load', function() {
            map.addSource('points', {
                'type': 'geojson',
                'data': sourceData
            });

            map.addLayer({
                'id': 'mylayer',
                'type': 'symbol',
                'source': 'points',
                'layout': {
                // get the icon name from the source's "icon" property
                // concatenate the name to get an icon from the style's sprite sheet
                'icon-image': ['concat', 'harbor', '-15'],
                // get the title name from the source's "title" property
                'text-field': ['get', 'Title', ['get', 'project']],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
                }
            });
        });

        window.eventBus.$on('update', function(data) {
            console.log(data);
        })   
    },

    beforeDestroy () {
        window.eventBus.$off('update') 
    },

    computed: {
    },

    methods: {
        
    },

}
</script>

<style lang="scss" scoped>
</style>
