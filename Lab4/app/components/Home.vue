<template>
    <Page class="app" actionBarHidden="true">
        <StackLayout class="page">
            <FlexboxLayout class="table" flexDirection="column">
                <Label textWrap="True" class="table_text" v-model="display"  fontSize="48pt" text="second" height="70%"/>
            </FlexboxLayout>
            <GridLayout class="buttons" columns="*, *, *, *" rows="*, *, *, *, *">
                <Button class="button clear"    @tap="clear"        text="C"    row="0" col="0"/>
                <Button class="button sign"     @tap="sign"         text="+/-"  row="0" col="1"/>
                <Button class="button oper"     @tap="percent"      text="%"    row="0" col="2"/>
                <Button class="button oper"     @tap="divide('/')"  text="÷"    row="0" col="3"/>
                <Button class="button"          @tap="num('7')"     text="7"    row="1" col="0"/>
                <Button class="button"          @tap="num('8')"     text="8"    row="1" col="1"/>
                <Button class="button"          @tap="num('9')"     text="9"    row="1" col="2"/>
                <Button class="button oper"     @tap="multiply('*')"text="×"    row="1" col="3"/>
                <Button class="button"          @tap="num('4')"     text="4"    row="2" col="0"/>
                <Button class="button"          @tap="num('5')"     text="5"    row="2" col="1"/>
                <Button class="button"          @tap="num('6')"     text="6"    row="2" col="2"/>
                <Button class="button oper"     @tap="minus('-')"   text="−"    row="2" col="3"/>
                <Button class="button"          @tap="num('1')"     text="1"    row="3" col="0"/>
                <Button class="button"          @tap="num('2')"     text="2"    row="3" col="1"/>
                <Button class="button"          @tap="num('3')"     text="3"    row="3" col="2"/>
                <Button class="button oper"     @tap="plus('+')"    text="+"    row="3" col="3"/>
                <Button class="button"          @tap="num('0')"     text="0"    row="4" col="0" colSpan="2"/>
                <Button class="button"          @tap="decimal('.')" text="."    row="4" col="2"/>
                <Button class="button oper"     @tap="equal"        text="="    row="4" col="3"/>
            </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      display: 0,
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clear() {
      this.display = 0;
    },
    sign() {
      this.display =
        this.display < 0
          ? (this.display = this.display - this.display * 2)
          : (this.display = this.display - this.display * 2);
    },
    percent() {
      this.display = this.display / 100;
    },
    num(number) {
      if (this.operatorClicked === true) {
        this.display = '';
        this.operatorClicked = false;
      }
      this.display =
        this.display === 0
          ? (this.display = number)
          : '' + this.display + number;
    },
    decimal() {
      if (this.display.indexOf('.') === -1) {
        this.append('.');
      }
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    plus() {
      this.operator = (a, b) => a + b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    equal() {
      this.display = this.operator(Number(this.previous), Number(this.display));
      this.previous = null;
      this.operatorClicked = true;
    }
  }
};
</script>

<style scoped lang="scss">

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
    .sign{
        font-Size: 25px;
        background-color: green;
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