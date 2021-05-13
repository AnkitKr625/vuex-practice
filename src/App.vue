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
      <UserTable/>
    </v-main>
  </v-app>
</template>

<script>
import UserTable from './components/UserTable';

export default {
  name: 'App',

  components: {
    UserTable,
  },

  data: () => ({
    //
  }),
};
</script>
