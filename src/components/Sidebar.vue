<template lang="html">
    <div id="sidebarModule">
        <b-container>
            <b-row>
                <b-col>
                    <b-form-input name="suburb" type="text" list="my-list-id"></b-form-input>
                    <datalist id="my-list-id">
                        <option>Manual Option</option>
                        <option v-for="(value, key) in options" :key="key">{{ value }}</option>
                    </datalist>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
//import sourceData from "../assets/files/testBlob.json";

export default {

    name: "Sidebar",

    props: {

    },

    data: () => ({
        options: []
    }),

    mounted() {
        // jQuery.each( sourceData.features, function( index, value ) {
        //     if( !jQuery.inArray( value.properties.project.Suburb, this.options ) ) {
        //         this.options.push( value.properties.project.Suburb );
        //     }
        // });
        //onsole.log(this.options);
    },

    beforeDestroy () {
    },

    computed: {
    },

    methods: {
        
    },

}
</script>

<style lang="scss" scoped>
</style>
