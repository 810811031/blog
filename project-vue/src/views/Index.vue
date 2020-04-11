<template>
    <div class="Index">
        <ul class="nav">
            <li>JavaScript<img src="../assets/img/js.png" /></li>
            <li>Vue<img src="../assets/img/vue.png" /></li>
            <li>React<img src="../assets/img/react.png" /></li>
            <li>其他<img src="../assets/img/mini.png" /></li>
        </ul>
        <div class="content">
            <listRow />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import listRow from '../components/list-row.vue'

@Component({
    components: {
        listRow
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.Index {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 10px 0;
    .nav {
        width: 1032px;
        margin: 0 auto;
        height: 130px;
        list-style: none;
        overflow: hidden;
        li {
            width: 250px;
            float: left;
            height: 100%;
            margin-right: 10px;
            background-color: #69c;
            text-align: center;
            line-height: 130px;
            font-size: 30px;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            transition: all .1s linear;
            img {
                width: 36px;
                margin-left: 10px;
            }
            &:nth-of-type(1) {
                background: linear-gradient(to bottom right, #d4b941, #fed84f);
            }
            &:nth-of-type(2) {
                background: linear-gradient(to bottom right, #47b785, #87b785);
            }
            &:nth-of-type(3) {
                background: linear-gradient(to bottom right, #66daf6, #a6daf6);
            }
            &:nth-of-type(4) {
                margin-right: 0;
                background: linear-gradient(to bottom right, #6699cc, #6f99cc);
            }
            &:hover {
                font-size: 35px;
            }
        }
    }
    .content {
        width: 1032px;
        min-height: calc(100% - 140px);
        background-color: #fff;
        margin: 0 auto;
        margin-top: 10px;
        box-sizing: border-box;
        padding-bottom: 50px;
    }
}
</style>