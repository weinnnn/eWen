<template>
    <div class="common-layout">
      <el-container>
        <el-main><Main></Main></el-main>
        <el-footer></el-footer>
      </el-container>
    </div>
  </template>
  

<script lang = "ts">
import Head from './Head.vue';
import Main from './main/Main.vue';
export default {
    name: "Home",
    setup() {
        return {};
    },
    components: { Head, Main }
}
</script>

<style  scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>