<template>
    <div class="user-main demo-radius">
        <div class="user-head radius" :style="{
            borderRadius: radius.type
                ? `var(--el-border-radius-${radius.type})`
                : '',
        }">
        <div class="user-head-c">
            <el-descriptions title="User Info">
                <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                <el-descriptions-item label="Remarks">
                    <el-tag size="small">School</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
                    Province</el-descriptions-item>
            </el-descriptions>
        </div>
            
        </div>
            


    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    name: 'Name',
    setup() {

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
        return { radius, getValue }
    }
}
</script>

<style scoped>
.user-main {
    position: absolute;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

}
.user-head{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 1200px;
    padding-left: 40px;
}
.user-head-c{
    width: 1100px;
}
</style>