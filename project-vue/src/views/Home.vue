<template>
  <div class="home" @scroll="handleAddEventer">
    <div class="content" ref="content">
      <div class="content-view">
        <div class="content-title">{{ title }}</div>
        <p class="content-time">2020年4月7日 12:47:32</p>
      </div>
      <a-affix :offsetTop="1" :style="{ position: 'absolute', top: 0, right: 0 }" 
        :target="() => this.$refs.content">
        <div class="content-nav">
          <div class="content-nav-title"><span></span>推荐阅读</div>
          <div class="none">无</div>
        </div>
      </a-affix>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  public scrollTop :number        = 0
  public timer     :any|undefined = undefined

  public handleAddEventer(e: any) {
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (e.target.scrollTop - this.scrollTop > 30) {
        this.$store.commit('changeTitleStatus', true)
      } else if(e.target.scrollTop - this.scrollTop < -30 ) {
        this.$store.commit('changeTitleStatus', false)
      }
      this.scrollTop = e.target.scrollTop
    }, 300)
  }

  get title(): string {
    return this.$store.getters.getTitle
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 10px 0;
  .content {
    width: 1032px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    padding-top: 1px;
    .content-view {
      width: 730px;
      height: 1000px;
      border-radius: 2px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px;
      opacity: 0;
      animation: show .2s forwards;
      .content-title {
        font-size: 28px;
        color: #404040;
        font-weight: 700;
      }
      .content-time {
        font-size: 13px;
        color: rgb(200,202,204);
      }
    }
    @keyframes show {
      from { opacity: 0; transform: translateY(-20px) }
      to { opacity: 1; transform: translateY(0) }
    }
    .content-nav {
      width: 292px;
      height: 395px;
      border-radius: 2px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px;
      .content-nav-title {
        width: 100%;
        height: 18px;
        line-height: 18px;
        font-size: 16px;
        overflow: hidden;
        span {
          width: 4px;
          height: 18px;
          background-color: #009a61;
          float: left;
          margin-right: 5px;
          color: #333;
        }
      }
      .none {
        font-size: 16px;
        color: #999;
        line-height: 50px;
      }
    }
  }
}
</style>