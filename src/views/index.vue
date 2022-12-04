<template>
  <div class="index">
    <!-- 搜索框 -->
    <div class="flex justify-center mt-4 sm:mt-40">
      <el-input placeholder="请输入..." class="input-with-select w-11/12 sm:w-3/6" v-model="keyword">
        <el-button
          slot="append"
          icon="el-icon-search"
          class="btn-search"
          type="primary"
          @click="doSearch"
        >百度一下</el-button>
      </el-input>
    </div>
    <!-- 选项卡 -->
    <div class="mt-4 sm:mt-10">
      <el-tabs :tab-position="'top'">
        <el-tab-pane :label="tab.name" v-for="(tab,key) in websites.tabs" :key="key">
          <site-cards class="mt-4 sm:mt-10" :site-list="tab.sites"></site-cards>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import websites from '../../static/websites'
import SiteCards from '@/components/SiteCards'
// import StarrySky from '@/utils/starry-sky.js'
/* eslint-disable no-new */
// new StarrySky() // 星空背景

export default {
  name: 'Index',
  components: { SiteCards },
  data() {
    return {
      keyword: '',
      websites
    }
  },
  computed: {},
  methods: {
    doSearch() {
      window.open(`https://www.baidu.com/s?wd=${this.keyword}`)
    },
    openUrl(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="less">
body {
  background: #fff;
  background-image: url(../assets/bg-single.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}

@blue: rgb(78, 110, 242);
@blue-hover: rgb(70, 98, 217);

.btn-search {
  color: #fff !important;
  background-color: @blue !important;
  border-color: @blue !important;
}

.btn-search:hover {
  background-color: @blue-hover !important;
  border-color: @blue-hover !important;
}

.el-tabs__nav.is-top {
  border-radius: 4px;
  overflow: hidden;
}

.el-tabs__header {
  margin: 0;
}

.el-tabs__item {
  background-color: #fff;
  padding: 0 10px !important;
}

.el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px !important;
}

.el-tabs__item.is-top:last-child {
  padding-right: 20px !important;
}

.el-tabs__active-bar,
.el-tabs__nav-wrap::after {
  height: 0;
}

.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}

.index {
  width: 100%;
  height: 100vh;
}
</style>
