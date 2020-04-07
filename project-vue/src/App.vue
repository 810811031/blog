<template>
  <div id="app">
    <div class="header">
      <div class="header-inside">
        <span class="logo">Blog</span>
        <div class="header-content">
          <div :class="['header-content-turn', { 'turn': showTitle  }]">
            <span class="header-nav-button">首页</span>
            <a-input-search class="search" placeholder="搜索" />
            <p>{{ title }}</p>
          </div>
          <span class="header-nav-time">{{ time }}</span>
        </div>
      </div>
    </div>
    <routerView />
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getFormatTime } from './tools/index'
import axios from 'axios'

@Component
export default class App extends Vue {
  public time: string = ''

  public created() {
    this.getCurrentTime()
    setInterval(() => 
      this.getCurrentTime()
    ,1000)
  }

  public mounted() {
    axios.post('http://localhost:3000/test', { a: 123 })
  }

  private getCurrentTime(): void {
    this.time = getFormatTime()
  }

  get title(): string {
    return this.$store.getters.getTitle
  }

  get showTitle(): boolean {
    console.log(this.$store.getters.getTitleStatus)
    return this.$store.getters.getTitleStatus
  }

}
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 56px 0;
  position: relative;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  .header {
    width: 100%;
    height: 56px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .header-inside {
      max-width: 1440px;
      min-width: 1200px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .logo {
        color: #009a61;
        display: inline-block;
        line-height: 56px;
        padding: 0 30px;
        font-size: 28px;
        position: absolute;
      }
      .header-content {
        width: 1032px;
        height: 100%;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        .header-content-turn {
          width: 730px;
          height: 112px;
          display: inline-block;
          transition: top .2s ease-out;
          position: absolute;
          left: 0;
          top: 0;
          p {
            line-height: 56px;
            margin-left: 20px;
            font-size: 20px;
            color: #404040;
            font-weight: 700;
          }
          .header-nav-button {
            display: inline-block;
            padding: 0 20px;
            font-size: 17px;
            color: #333;
            line-height: 56px;
            cursor: pointer;
            transition: all .1s linear;
            &:hover {
              background-color: rgba(0,0,0,.05);
            }
          }
          .search {
            width: 225px;
            height: 34px;
            margin: 0 20px;
          }
        }
        .turn {
          top: -56px
        }
        .header-nav-time {
          float: right;
          line-height: 56px;
          color: #009a61;
          &::after {
            content: '';
            width: 0;
            height: 0;
            clear: both;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 56px;
    box-shadow: 0 -2px 10px rgba(0,0,0,.05);
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
}
</style>
