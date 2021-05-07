<template>
    <Page class="app" actionBarHidden="true">
        <StackLayout class="page">
            <FlexboxLayout class="table" flexDirection="column">
                <Label  class="table_text" v-model="expression" fontSize="24pt" text="first" height="30%"/>
                <Label  v-model="result" class="table_text" fontSize="48pt" text="second" height="70%"/>
            </FlexboxLayout>
            <GridLayout class="buttons" columns="*, *, *, *" rows="*, *, *, *, *">
                <Button class="button clear" @tap="onClear"         text="C" row="0" col="0" colSpan="3"/>
                <Button class="button oper" @tap="onKeyTap('/')"    text="÷" row="0" col="3"/>
                <Button class="button"      @tap="onKeyTap('7')"    text="7" row="1" col="0"/>
                <Button class="button"      @tap="onKeyTap('8')"    text="8" row="1" col="1"/>
                <Button class="button"      @tap="onKeyTap('9')"    text="9" row="1" col="2"/>
                <Button class="button oper" @tap="onKeyTap('*')"    text="×" row="1" col="3"/>
                <Button class="button"      @tap="onKeyTap('4')"    text="4" row="2" col="0"/>
                <Button class="button"      @tap="onKeyTap('5')"    text="5" row="2" col="1"/>
                <Button class="button"      @tap="onKeyTap('6')"    text="6" row="2" col="2"/>
                <Button class="button oper" @tap="onKeyTap('-')"    text="−" row="2" col="3"/>
                <Button class="button"      @tap="onKeyTap('1')"    text="1" row="3" col="0"/>
                <Button class="button"      @tap="onKeyTap('2')"    text="2" row="3" col="1"/>
                <Button class="button"      @tap="onKeyTap('3')"    text="3" row="3" col="2"/>
                <Button class="button oper" @tap="onKeyTap('+')"    text="+" row="3" col="3"/>
                <Button class="button"      @tap="onKeyTap('0')"    text="0" row="4" col="0" colSpan="2"/>
                <Button class="button"      @tap="onKeyTap('.')"    text="." row="4" col="2"/>
                <Button class="button oper" @tap="onResult"         text="=" row="4" col="3"/>
            </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
//script

  export default {
    data() {
        return {
            result: '0',
            expression: '',
            goodInput: true
      }
    },
    methods:{
        onKeyTap: function(text){
            if(!this.goodInput)
                return
            if(this.result == '0')
                this.result = text
            else
                this.result += text
        },
        onResult: function(){
            try{
                this.expression = this.result + '='
                this.result = eval(this.result);
                if (isNaN(this.result)) {
                    throw new Error();
                }
            }
            catch{
                this.expression = ''
                this.result = 'Error';
                this.goodInput = false;
            }
        },
        onClear: function(){
            this.expression = ''
            this.result = '0';
            this.goodInput = true;
        }
    }
  };
</script>

<style scoped lang="scss">

    //styles
    .app{
        background: linear-gradient(0.75turn,#27fdf5, #a8f6f8, #d7fffe, #f98dc9, #f765b8); 
    }
    .page{
        width: 90%;
        height: 90%;
        margin-top: 20px;
        border-radius: 75px;
    }
    .table{
        height: 20%;
        border-color: black;
        border-radius: 75px;
        margin: 70px 50px 20px 50px;
        color: purple;
    }
    .buttons{
        border-color:black;
        border-radius: 100px;
        margin: 50px auto;
        color: whitesmoke;
        padding: 15px;
    }
    .table_text{
        text-align: right;
        margin-right: 50px;
    }
    .button{
        height: 200px;
        background-color: yellowgreen;
        color: #ffffff;
        border-radius: 50%;
        font-size: 40px;
    }
    .clear{
        background: linear-gradient(white, blue, red); 
        color: white;
    }
    .oper{
        background-color: green;
    }
    .button:active{
        background-color: #999999;
    }
    .clear:active{
        background-color: #eee;
    }
    .oper:active(){
        background-color: #ffbb00;
    }
</style>