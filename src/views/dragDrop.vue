<template>
  <div id="dragDrop" class="dragDrop">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Drag Drop page</h3>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body">body Text</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body">body Text</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body">body Text</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-body">body Text</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="list-demo">
    <div class="widget-container">
      <DxList
        :data-source="plannedTasks"
        :repaint-changes-only="true"
        key-expr="id"
      >
        <DxItemDragging
          data="plannedTasks"
          :allow-reordering="true"
          :on-drag-start="onDragStart"
          :on-add="onAdd"
          :on-remove="onRemove"
          group="tasks"
        />
      </DxList>
      <DxList
        :data-source="doingTasks"
        :repaint-changes-only="true"
        key-expr="id"
      >
        <DxItemDragging
          data="doingTasks"
          :allow-reordering="true"
          :on-drag-start="onDragStart"
          :on-add="onAdd"
          :on-remove="onRemove"
          group="tasks"
        />
      </DxList>
    </div>
  </div>
</template>

<script>
import DxDraggable from "devextreme-vue/draggable";
import DxList, { DxItemDragging } from "devextreme-vue/list";

export const plannedTasks = [
  { id: 5, text: "New Brochures" },
  { id: 6, text: "2019 Brochure Designs" },
  { id: 7, text: "Brochure Design Review" },
  { id: 8, text: "Website Re-Design Plan" },
  { id: 9, text: "Rollout of New Website and Marketing Brochures" },
  { id: 10, text: "Create 2018 Sales Report" },
  { id: 11, text: "Direct vs Online Sales Comparison Report" },
  { id: 12, text: "Review 2018 Sales Report and Approve 2019 Plans" },
  { id: 13, text: "Submit Signed NDA" },
  { id: 14, text: "Update Revenue Projections" },
  { id: 15, text: "Review Revenue Projections" },
  { id: 16, text: "Comment on Revenue Projections" },
  { id: 17, text: "Scan Health Insurance Forms" },
  { id: 18, text: "Sign Health Insurance Forms" },
  { id: 19, text: "Follow up with West Coast Stores" },
  { id: 20, text: "Follow up with East Coast Stores" },
  { id: 21, text: "Submit Refund Report for 2019 Recall" },
  { id: 22, text: "Give Final Approval for Refunds" },
  { id: 23, text: "Prepare Product Recall Report" },
  { id: 24, text: "Review Product Recall Report by Engineering Team" },
  { id: 25, text: "Review Training Course for any Omissions" },
  { id: 26, text: "Review Overtime Report" },
  { id: 27, text: "Submit Overtime Request Forms" },
  { id: 28, text: "Overtime Approval Guidelines" },
  { id: 29, text: "Create Report on Customer Feedback" },
  { id: 30, text: "Review Customer Feedback Report" },
];

export default {
  name: "dragDrop",
  components: {
    DxList,
    DxItemDragging,
  },
  data() {
    return {
      plannedTasks,
    };
  },
  methods: {
    onDragStart(e) {
      e.itemData = this[e.fromData][e.fromIndex];
    },
    onAdd(e) {
      const data = [...this[e.toData]];
      data.splice(e.toIndex, 0, e.itemData);
      this[e.toData] = data;
    },
    onRemove(e) {
      const data = [...this[e.fromData]];
      data.splice(e.fromIndex, 1);
      this[e.fromData] = data;
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
