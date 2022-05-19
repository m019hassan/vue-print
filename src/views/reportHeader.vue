<template>
  <div>
    <div class="container-fluid mb-3">
      <div class="row justify-content-between">
        <div class="col-8">
          <h4>Title Report</h4>
          <p><strong>Description:</strong> <br> Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="col-4 d-flex">
            <img class="img-thumbnail ms-auto " src="https://via.placeholder.com/80x80" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReportHeader",
};
</script>

<style scoped>
img{
    width: 80px;
    height: 80px;
}
</style>