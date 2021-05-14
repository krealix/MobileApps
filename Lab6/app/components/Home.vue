<template>
    <Page>
        <ActionBar title="BreakingBad Character"/>
        <StackLayout>
          <StackLayout>
            <label>chid:              {{this.quote_id}}</label>
            <label>имя героя:         {{this.quote}}</label>
            <label>день рождения:     {{this.author}}</label>
            <label>1:                 {{this.series}}</label>
          </StackLayout>
          <StackLayout>
            <TextField class="input" v-model="quote_id" hint="write char_id"  @returnPress= "newCharacter()"/>
            <Button text='check' @tap= "check()"/>
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
        quote_id:'',
        quote: '',
        author: '',
        series:'',
      }
    },
    methods: {
      newCharacter() {
        if(this.quote_id != ''){
          this.msg = this.quote_id
          console.log(this.quote_id)
        }
      },
      check (){
        Http.getJSON('https://www.breakingbadapi.com/api/quotes/' + this.quote_id)
        .then(
          (result) => {
            this.result = JSON.parse(result)
            this.quote_id = this.result.quote_id
            this.quote = this.result.quote 
            this.author = this.result.author 
            this.series = this.result.series
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
</style>