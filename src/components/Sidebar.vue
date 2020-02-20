<template lang="html">
    <div id="sidebarModule">
        <b-container>
            <b-row>
                <b-col>
                    <b-form-group label="Title (Auto Complete):">
                        <b-form-input v-model="title" name="title" type="text" list="my-list-id" @change="update()"></b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="(value, key) in suggests" :key="key">{{ value }}</option>
                        </datalist>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Suburb (Drop Down):">
                        <b-form-select v-model="suburb" :options="options" @change="update()"></b-form-select>
                    </b-form-group>                    
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Ownership (Switch):">
                          <b-form-radio v-model="owner" name="owner" value="PRIVATE" @change="update('PRIVATE')">PRIVATE</b-form-radio>
                          <b-form-radio v-model="owner" name="owner" value="STATE" @change="update('STATE')">STATE</b-form-radio>
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
        owner: '',
    }),

    mounted() {
        let self = this
        $.each( sourceData.features, function( index, value ) {

            // Prepare auto complete data
            if( !self.suggests.includes(value.properties.project.Title) ) {
                self.suggests.push( value.properties.project.Title );
            }

            // Prepare dropdown data
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
        update( own = null ) {

            if( own != null ) {
                this.owner = own;
            }

            // Emit filter values to map
            this.$eventBus.$emit('update', { title: this.title, suburb: this.suburb, owner: this.owner })
        }
    },

}
</script>

<style lang="scss" scoped>
</style>
