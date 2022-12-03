<template>
  <div class="index">
    <div>Hello World</div>
    <el-row class="p-40">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      show: false
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less">
.index {
  div {
    background-color: aqua;
  }
}
</style>
