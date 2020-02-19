<template lang="html">
    <div id="sidebarModule">
        <b-container>
            <b-row>
                <b-col>
                    <b-form-group label="Title (Auto Complete):">
                        <b-form-input v-model="title" name="title" type="text" list="my-list-id" @change="update"></b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="(value, key) in suggests" :key="key">{{ value }}</option>
                        </datalist>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Suburb (Drop Down):">
                        <b-form-select v-model="suburb" :options="options" @change="update"></b-form-select>
                    </b-form-group>                    
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Stage (Switch):">
                          <b-form-radio v-model="stage" name="approved" value="1" @change="update">DA Approved</b-form-radio>
                          <b-form-radio v-model="stage" name="approved" value="0" @change="update">Not DA Approved</b-form-radio>
                    </b-form-group>
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
        title: '',
        suburb: '',
        stage: '',
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
        update() {
            window.eventBus.$emit('update', { title: this.title, suburb: this.suburb, stage: this.stage })
        }
    },

}
</script>

<style lang="scss" scoped>
</style>
