<template>
    <Page>
        <ActionBar title="Rick and Morty Universe info"/>
        <StackLayout>
          <StackLayout>
            <label>The id of the character:              {{this.id}}</label>
            <label>Name Character:                       {{this.name}}</label>
            <label>The status of the character:          {{this.status}}</label>
            <label>Name species:                         {{this.species}}</label>
            <label>The type or subspecies:               {{this.type}}</label>
            <label>Gender of the character:              {{this.gender}}</label>
            <label>Name and link origin location:        {{this.origin.name}}</label>
            <label>Name and link last known location:    {{this.location.name}}</label>
          </StackLayout>
          <StackLayout>
            <TextField class="input" v-model="id" hint="Write id character"  @returnPress= "Character()"/>
            <Button class="Search" text='Lets go' @tap= "Output()"/>
          </StackLayout>
        </StackLayout>
    </Page>
</template>

<script >
import { Http } from '@nativescript/core'
import * as ApplicationSettings from '@nativescript/core/application-settings';

  export default {
    data() {
      return {
        id:'',
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
          name: '',
        },
        location: {
          name: '',
        },
      }
    },
    methods: {
      Character() {
        if(this.id != ''){
          this.msg = this.id
          console.log(this.id)
        }
      },
      Output (){
        Http.getString('https://rickandmortyapi.com/api/character/' + this.id)
        .then(
          (result) => {
            this.result = JSON.parse(result)
            this.id = this.result.id
            this.name = this.result.name 
            this.status = this.result.status 
            this.species = this.result.species
            this.type = this.result.type
            this.gender = this.result.gender
            this.origin = this.result.origin 
            console.log(result)
          }
        )
      } 
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: black;
    }
    StackLayout{
      color:black;
    }
    .text{
      text-align: center;
    }
    .Search{
      border-radius: 25%;
      height: 5%;
      width: 20%;
    }
</style>