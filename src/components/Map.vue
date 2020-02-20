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
        mapObj: null
    }),

    mounted() {
        var self = this;

        var map = new self.$mapbox.Map({
            container: 'map',
            accessToken: "pk.eyJ1Ijoicm9iZXJ0d2FuZzAyMTciLCJhIjoiY2s2cnFhMmwzMDhkNzNvcWl5cjFpdXc5dCJ9.gAkCQbVUq9lQY76A368odg",
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [151.209862, -33.869334],
            zoom: 14,

        });

        self.mapObj = map

        map.on('load', function() {

            // Add source data to map
            map.addSource('points', {
                'type': 'geojson',
                'data': sourceData
            });

            // Add points layer to map
            map.addLayer({
                'id': 'maplayer',
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

        // When user filters, update the map layer
        self.$eventBus.$on('update', function(data) {
            var mapFilter = [ "all" ]

            // If filter title
            if( data.title ) {
                mapFilter.push(["==", ['get', 'Title', ['get', 'project']], data.title]);
            }

            // If filter suburb
            if( data.suburb ) {
                mapFilter.push(["==", ['get', 'Suburb', ['get', 'project']], data.suburb]);
            }

            // If filter ownership
            if( data.owner ) {
                mapFilter.push(["==", ['get', 'Ownership', ['get', 'project']], data.owner]);
            }

            // Refresh map with the filters
            self.mapObj.setFilter('maplayer', mapFilter);
        })   
    },

    beforeDestroy () {
        this.$eventBus.$off('update') 
    },

    computed: {
    },

    methods: {
        
    },

}
</script>

<style lang="scss" scoped>
</style>
