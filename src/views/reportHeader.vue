<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
        <div class="col-3 d-flex">
          <!-- https://via.placeholder.com/80x80 -->
            <img class="img-fluid " src="../assets/logo.png" alt="" />
        </div>
        <div class="col-9 text-end">
          <h1 class="text-right">
            <span class="text-dark">GCA02(2/2)  - </span>
            تطوير الملكتبات العامة
          </h1>
          <!-- <p><strong>Description:</strong> <br> Lorem ipsum dolor sit amet.</p> -->
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
    /* width: 80px; */
    height: 120px;
}
h1{
  font-size: 28px;
  position: relative;
}
h1::after{
  content: '';
  width: 80px;
  height: 7px;
  background-color: orange !important;
  -webkit-print-color-adjust: exact; 
  position: absolute;
  bottom: -1rem;
  right: 0;
}
</style>