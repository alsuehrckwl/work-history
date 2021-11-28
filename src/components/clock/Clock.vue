<template>
  <v-content>
    <div class="block">
      <p class="digit">{{ hours }}:{{ minutes }}:{{ seconds }}</p>
    </div>
  </v-content>
</template>

<script>
import format from "date-fns/format";

export default {
  ready() {
    window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  props: {
    date: {}
  },
  data() {
    return {
      now: new Date()
    };
  },
  computed: {
    seconds() {
      return format(this.now, "ss");
    },
    minutes() {
      return format(this.now, "mm");
    },
    hours() {
      console.log(this.now);

      return format(this.now, "HH");
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.block {
  display: flex;
  justify-content: center;
}
.digit {
  color: #ecf0f1;
  font-size: 80px;
  font-weight: 200;
  font-family: "Roboto", serif;
  margin: 10px;
  text-align: center;
}
</style>
