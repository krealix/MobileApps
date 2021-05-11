<template>
  <Page  class="app">
    <StackLayout>
      <TextField class="input" v-model="newText" hint="Input ur task"  @returnPress= "newTask()"/>
      <ScrollView orientation="horizontal">
        <ListView  class="task" for="task in tasks">
          <v-template>
            <GridLayout columns="250%, 55, 55">
            <label  class="task-text done" v-if="task.done" textWrap="true" col="0">{{task.title}}</label>
            <label  class="task-text" v-else  @tap="edit(task.id, task.title)" textWrap="true" col="0">{{task.title}}</label>
            <Button  class="btn check-btn" text="R" @tap="taskDone(task.id)" col="1"/>
            <Button  class="btn remove-btn" text="D" @tap="remove(task.id)" col="2"/> 
            </GridLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import {ApplicationSettings} from '@nativescript/core'
export default {
  data () {
    return {
      newText: '',
      tasks: []
    }
  },
  mounted(){
    if(ApplicationSettings.getString('tasks')){
      this.tasks=Object.values(JSON.parse(ApplicationSettings.getString('tasks')));
    }
  },
  methods: {
    newTask () {
      if(this.newText != ''){
        this.tasks.push({
          id: Math.random(),
          title: this.newText,
          done: false
        });
        this.newText = '';
      }
      this.save();
    },
    taskDone (id) {
      this.tasks = this.tasks.map(task => {
        if (task.id == id) task.done = !task.done;
        return task;
      })
      this.save();
    },
    remove (id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.save();
    },
    save(){
      let toSave = Object.assign({}, this.tasks);
      ApplicationSettings.setString('tasks', JSON.stringify(toSave));
    },
    
    edit(id, old_text) {
      prompt({
        title: "Change task",
        message: "New task:",
        okButtonText: "Change",
        cancelButtonText: "Cancel",
        defaultText: old_text,
      })
      .then(result => {
         this.tasks.forEach(task => {
          if (task.id == id && result.text != ''){
            task.title = result.text;
            this.save();
          }    
         });
      })
    }
  }
}
</script>

<style>
.app{
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  }
.task-text{
  background-color: white;
  border-radius: 10%;
  color: black;
  text-align: center;
}
.done {
  text-decoration: line-through;
}
.btn{
  background-color: green;
  border-radius: 50%;
  color: #ffffff;
  margin: 30px 10px;
}
.input{
  background-color: yellow
  border-radius: 50%;
  color: white;
  margin: 50px 30px;
  text-align: center;
}
</style>