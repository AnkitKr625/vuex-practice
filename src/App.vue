<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>USER TABLE</h1>
      </div>
    </v-app-bar>

    <v-main>
      <ABC/>
      <Counter/>
      <XYZ/>
    </v-main>
  </v-app>
</template>

<script>
import Counter from './components/Counter';
import ABC from './components/ABC';
import XYZ from './components/XYZ';


export default {
  name: 'App',

  components: {
    Counter,
    ABC,
    XYZ
  },

  data: () => ({
    //
  }),
};
</script>
