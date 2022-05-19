<template>
  <div>
    <div class="title-page">
      <h1>Print Page</h1>
      <p>
        {{ date }}
      </p>
      <button id="printBtn" @click="printPage('data')" class="btn btn-primary">
        Go To print
      </button>
    </div>
    <p id="data">
      <data-table />
    </p>
  </div>
</template>
<script>
import dataTable from "../views/dataTable.vue";

export default {
  name: "print",
  components: {
    dataTable,
  },
  data: function () {
    return {
      msg: "Hello",
      date: "",
    };
  },
  methods: {
    printPage: function (el) {
      this.date = Date();
      window.print();
    },
  },
};
</script>

<style scoped>
@media print {
  .title-page {
      display: none;
  }
}
</style>