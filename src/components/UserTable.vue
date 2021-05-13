<template>
  <div><h1>UserTable</h1></div>
</template>

<script>

import {table} from '@/UserDetails.js';


export default {
  name: `UserTable`,
  data(){
    return{
      data:{}
    }
  },
  created() {
    this.data=table().results;
    console.log(this.data);
  }
}
</script>