
<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <th>#</th>
        <th>First</th>
        <th>Second</th>
        <th>Third</th>
      </thead>
      <tbody>
        <tr>
          <td>45</td>
          <td>45</td>
          <td>45</td>
          <td>45</td>
        </tr>
        <tr>
          <td>45</td>
          <td>45</td>
          <td>45</td>
          <td>45</td>
        </tr>
        <tr>
          <td>45</td>
          <td>45</td>
          <td>45</td>
          <td>45</td>
        </tr>
        <tr>
          <td>45</td>
          <td>45</td>
          <td>45</td>
          <td>45</td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <div class="my-5">
      <table class="table table-striped table-bordered table-hover">
        <thead class="">
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
          <th>Join Date</th>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.job }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReportContent",
  data() {
    return{
      items: [
        {
          id: "1",
          name: "Mohamed",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "2",
          name: "Ahmed",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "3",
          name: "Kareem",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
        {
          id: "4",
          name: "Emaad",
          job: "acountant",
          date: "21/12/2022",
        },
      ],
    };
  },
};
</script>
