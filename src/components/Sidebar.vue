<template lang="html">
    <div id="sidebarModule">
        <b-container>
            <b-row>
                <b-col>
                    <p class="sidebarP">Title (Auto Complete):</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-input name="suburb" type="text" list="my-list-id"></b-form-input>
                    <datalist id="my-list-id">
                        <option v-for="(value, key) in suggests" :key="key">{{ value }}</option>
                    </datalist>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p class="sidebarP">Suburb (Drop Down):</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p class="sidebarP">Switch:</p>
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
import $ from 'jquery'
import sourceData from "../assets/files/testBlob.json";

export default {

    name: "Sidebar",

    props: {

    },

    data: () => ({
        suggests: [],
        options: [],
        selected: '',
    }),

    mounted() {
        let self = this
        $.each( sourceData.features, function( index, value ) {
            if( !self.suggests.includes(value.properties.project.Title) ) {
                self.suggests.push( value.properties.project.Title );
            }
            if( !self.options.includes(value.properties.project.Suburb) ) {
                self.options.push( value.properties.project.Suburb );
            }
        });
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
