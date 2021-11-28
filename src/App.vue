<template>
  <v-app>
    <v-container fluid>
      <Header />
      <!-- <Calendar /> -->
      <Clock />
      <Button />
    </v-container>
  </v-app>
</template>

<script>
import Calendar from "./components/calendar/Calendar";
import Header from "./components/header/Header";
import Button from "./components/Button";
import Clock from "./components/clock/Clock";

export default {
  name: "App",
  components: {
    Header,
    Button,
    Clock
    // Calendar
  },
  data: () => ({
    //
  }),
  moundted() {
    // console.log(this.$electron.remote.app.getPath('appData'))
  }
};
</script>
