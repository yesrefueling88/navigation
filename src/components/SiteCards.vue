<template>
  <div class="mx-auto w-screen sm:w-4/5 flex flex-wrap justify-center">
    <div
      class="w-1/2 sm:w-48 h-24 sm:h-24 mb-4 sm:mb-8"
      :class="item.name ? '' : 'invisible sm:hidden'"
      v-for="(item,key) in siteList"
      :key="key"
    >
      <div class="h-full" :class="key % 2 === 0 ? 'pl-4 pr-2 sm:px-4' : 'pl-2 pr-4 sm:px-4'">
        <div
          class="bg-white h-full p-2 text-center rounded cursor-pointer"
          @click="openUrl(item.url)"
        >
          <!-- logo -->
          <div class="h-2/3 flex justify-center items-center">
            <span
              class="icon iconfont"
              :class="'icon-'+item.logo.icon.name"
              :style="'color:'+item.logo.icon.color"
            ></span>
          </div>
          <!-- name -->
          <div class="h-1/3">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteCards',
  props: {
    siteList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {},
  mounted: function() {
    if (this.siteList.length % 2 !== 0) {
      this.siteList.push({
        name: '',
        logo: {
          icon: {
            name: '',
            image: ''
          }
        },
        url: ''
      })
    }
  },
  methods: {
    openUrl(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 2rem !important;
}
</style>
