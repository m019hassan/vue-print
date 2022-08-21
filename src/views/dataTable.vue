<template>
  <div id="printPage" class="print-page landScape">
    <table class="report-container w-100">
      <thead class="report-header">
        <tr>
          <th>
            <report-header />
          </th>
        </tr>
      </thead>
      <tfoot class="report-footer">
        <tr>
          <td>
            <report-footer />
          </td>
        </tr>
      </tfoot>
      <tbody class="report-content">
        <tr>
          <td>
            <report-content />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ReportContent from "../views/reportContent.vue";
import ReportFooter from "../views/reportFooter.vue";
import ReportHeader from "../views/reportHeader.vue";
// import ReportHeader from "../views/dragDrop.vue";

export default {
  name: "dataTable",
  components: {
    ReportFooter,
    ReportContent,
    ReportHeader,
    ReportContent,
  },
};
</script>

