<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
    @click:row="fetchUserDetail"
  >
   <template #item.avatar="{item}">
     <img :src='item.picture.thumbnail' alt='image'>
   </template>
   <template #item.name="{item}">
     {{`${item.name.title} ${item.name.first} ${item.name.last}`}}
   </template>
   <template #item.age="{item}">
     {{`${item.dob.age} Years`}}
   </template>
   <template #item.gender="{item}">
     <div v-if="item.gender=='male'">
       M
     </div>
     <div v-else>
       F
     </div>
   </template>
   <template #item.city="{item}">
     {{`${item.location.city}`}}
   </template>
  </v-data-table>
</template>

<script>

import {table} from '@/UserDetails.js';


export default {
  name: `UserTable`,
  data(){
    return{
      data:{},
      headers: [
        {
          text: `Avatar`,
          align: 'start',
          sortable: false,
          value: `avatar`,
        },
        { text: `Name`, value: `name` },
        { text: `Age`, value: `age` },
        { text: `gender`, value: `gender` },
        { text: `City`, value: `city` }
      ],
      users: []
    }
  },
  created() {
    this.users=table().results;
  },
  methods:{
    fetchUserDetail(){
      alert("Clicked");
    }
  }
}
</script>