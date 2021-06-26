<template>
    <Page>
        <ActionBar title="What is it?"/>
            <StackLayout>
                <Button class="button" @tap="Pok()" text="Pokemon"/>
                <Button class="button" @tap="ToDo()" text="ToDo"/>
                <Button class="button" @tap="Rick()" text="Rick"/>
                <Button class="button" @tap="Settings()" text="Settings"/>
                <Button class="button" @tap="about()" text="About"/>
                <Button class="button" @tap="closeApp()" text="Exit"/>
            </StackLayout>
    </Page>
</template>

<script >
import Pok from './Poki/Pok';
import ToDo from './ToDo';
import Rick from './Rick';
import Settings from './Settings';
import * as application from "@nativescript/core/application";

  export default {
    methods:{
      Pok: function(event){
        this.$showModal(Pok, {
          fullscreen: true,
        })
      },
      ToDo: function(event){
        this.$showModal(ToDo, {
          fullscreen: true,
        })
      },
      Rick: function(event){
        this.$showModal(Rick, {
          fullscreen: true,
        })
      },
      Settings: function(event){
        this.$showModal(Settings, {
          fullscreen: true,
        })
      },
      about() {
        alert(({
          title: "About",
          message: "Разработчик Андрей С.",
          okButtonText: "Ladno"
        }));
      },
      closeApp() {
        if (application.android) {
          application.android.foregroundActivity.finish();
        } else {
          exit(0);
        }
      }
    }
  }
</script>

<style>
  ActionBar {
    background-color: #ff9113;
    color: #fefefe;
}
  Page {
    background-color: #007fff;
}
  .button {
    vertical-align: center;
    text-align: center;
    color: #789922;
    background-color: #dddddd;
    font-size: 16px;
    font-family: sans-serif;
    width: 75%;
    height: 10%;
    margin-top: 12rem;
    border-radius: 7%;
}
</style>