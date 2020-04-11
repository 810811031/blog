<template>
    <div class="list-row">
        <div class="title">{{ title }}</div>
        <p>达瓦大富豪打哈课外活动家委会卡瓦话费卡外滑动我安徽佛安完后if我哦啊花覅往后我奥委会发哦ID号is好的if海鸥是的哈健康是福哈就开始框架暗黑风可接受的卡回答我ID厚爱武汉的</p>
        <div class="time">2020年1月23日 14:23:51</div>
        <div class="tags">
            <a-tag color="cyan">Vue</a-tag>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ListRow extends Vue {

    get title(): string {
        return this.$store.getters.getTitle
    }

}

</script>

<style lang="scss" scoped>
.list-row {
    width: 996px;
    height: 130px;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    .title {
        font-size: 18px;
    }
    p {
        width: 700px;
        color: #999;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
    }
    .time {
        float: right;
        color: #999;
        font-size: 12px;
    }
    .tags {
        width: 700px;
        height: 30px;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>