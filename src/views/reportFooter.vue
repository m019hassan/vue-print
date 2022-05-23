<template>
  <div class="footer-info mt-3">
    <h3>© وزارةالثقافة 2021 | سري للغاية| 1
      <span></span>
    </h3>
    <!-- <p>Lorem ipsum dolor sit amet.</p> -->
  </div>
</template>
<script>
export default {
  name: "ReportFooter",
};
</script>

<style scoped>
.footer-info{
  
}

h3{
  position: fixed;
  bottom: -25px;
  left: 0rem;
  z-index: 999;
  height: 35px;
  margin: 0 1rem 0.25rem;
  font-size: 12px;
  /* position: relative; */
  width: fit-content;
}

h3::after{
  content: '';
  width: calc(100% - 30px);
  height: 5px;
  background-color: orange !important;
  -webkit-print-color-adjust: exact; 
  position: absolute;
  top: -0.75rem;
  left: -1rem;
}
h3 span::after{
  /* display: inline-block; */
  color: red;
  counter-increment: page;
  /* content: counter(page); */
  margin: 0 0.25rem;
}

</style>