<template>
  <div class="index">
    <!-- 搜索框 -->
    <div class="flex justify-center mt-4 sm:mt-40 w-11/12 sm:w-184 mx-auto">
      <el-input
        placeholder
        class="input-with-select"
        v-model="keyword"
        @focus="inputFocus"
        @blur="inputBlur"
      >
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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
      entering: false, // 是否正在输入中
      websites
    }
  },
  computed: {
    ...mapState(['version']),
    ...mapGetters(['getVersion'])
  },
  mounted: function() {
    this.showVersion()
    document.onkeydown = event => {
      if (event.keyCode === 13 && this.entering) {
        this.doSearch()
      }
    }
  },
  methods: {
    doSearch() {
      window.open(`https://www.baidu.com/s?wd=${this.keyword}`)
    },
    openUrl(url) {
      window.open(url)
    },
    inputFocus() {
      this.entering = true
    },
    inputBlur() {
      this.entering = false
    },
    ...mapMutations(['setVersion']),
    ...mapActions(['setVersionSync']),
    showVersion() {
      console.log(`version: ${this.getVersion}`)
      this.setVersion({ version: '1.0.2' })
      this.setVersionSync({ version: '1.0.3' })
    }
  }
}
</script>

<style lang="less">
body {
  background: #fff;
  background-image: url(../assets/bg-single.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  min-width: auto;
}

@media (min-width: 640px) {
  body {
    min-width: 800px;
  }
}

@blue: rgb(78, 110, 242);
@blue-hover: rgb(70, 98, 217);

.index {
  width: 100%;
  height: 100vh;
}

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
</style>
