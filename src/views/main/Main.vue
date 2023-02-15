<template>
    <div class="main-main demo-radius" >
        <div class="main-top radius" :style="{
            borderRadius: radius.type
                ? `var(--el-border-radius-${radius.type})`
                : '',
        }">
            <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
                <el-tab-pane label="面试经验" class="top-pane">
                    <div style="top: ;">
                        <div>
                            <el-select v-model="value" class="m-2" placeholder="Select">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="求职题库">Config</el-tab-pane>
                <el-tab-pane label="校招日程">Role</el-tab-pane>
                <el-tab-pane label="求职助手">Task</el-tab-pane>
                <el-tab-pane label="牛蛙牛蛙">Task</el-tab-pane>
            </el-tabs>
        </div>
        <div class="main-mid radius" :style="{
            borderRadius: radius.type
                ? `var(--el-border-radius-${radius.type})`
                : '',
        }">
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
        </div>
    </div>
</template>

<script lang="ts">
import { round } from 'lodash';
import { ref } from 'vue'
export default {
    name: 'Main',
    setup() {
        const tabPosition = ref('left')

        const radius = ref({
                name: 'Round Radius',
                type: 'round'
            }
        )
        const getValue = (type: string) => {
            const getCssVarValue = (prefix: string, type: string) =>
                getComputedStyle(document.documentElement).getPropertyValue(
                    `--el-${prefix}-${type}`
                )
            return getCssVarValue('border-radius', type)
        }
        return { tabPosition, radius, getValue }
    }
}
</script>

<style scoped>
.main-main {
    position: absolute;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.main-top {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
}
.main-mid {
    position: absolute;
    top: 700px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
    background-color: blue;
}









.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs--right .el-tabs__content,

.top-pane {
    text-align: right;
    margin-top: 10px;
}

.el-tabs--left .el-tabs__content {
    height: 100%;

}





</style>