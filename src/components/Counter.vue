<template>
<div>
  <h1>{{counter}}</h1>
  <v-btn @click="increase">
    <h1>abc</h1>
  </v-btn>
  </div>
</template>

<script>
export default {
  name:'Counter',
  data(){
    return {
      counter:1,
    }
  },
  mounted(){
    
  },
  methods:{
    increase(){
      
      setTimeout(()=>{
        this.counter++;
        console.log(this.counter);
      },1000);
      this.$nextTick(()=>{
        console.log(this.counter,`abc`);
      })
     
      // console.log(this.counter);
      // this.$nextTick(()=>{
      //   console.log(this.counter);
      // })
    }
  }
}
</script>

<style>

</style>