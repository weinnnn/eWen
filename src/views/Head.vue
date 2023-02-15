<template>
    div
    <div class="header-posi">
        <div class="header-opt">
            <div class="logo">
                ewen
            </div>
            <div class="options">
                <div class="option"><router-link to="/">首页</router-link></div>
                <div class="option"><router-link to="/test1">讨论</router-link></div>
                <div class="option"><router-link to="/test1">求职</router-link></div>
            </div>

            <div class="search">
                <div class="search-input">
                    <el-input v-model="input" placeholder="Please input" />
                </div>
                <div>
                    <el-button type="success">Success</el-button>
                </div>
            </div>



            <div class="profile">
                <el-dropdown size="large">
                    <span class="el-dropdown-link">
                        <router-link :to='usergoto'>
                            <el-avatar class="profile" :size="50" :src=profile_photo />
                        </router-link>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <router-link to="/user">
                                <el-dropdown-item>我的主页</el-dropdown-item>
                            </router-link>
                            
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>账号设置</el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                    <el-button @click="qiehuan">切换</el-button>
                </el-dropdown>
            </div>

        </div>
    </div>
</template>

<script lang = "ts">
import { reactive, ref } from 'vue';
import axios from "axios"; 
import http from '@/utils/http';

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

export default {
    name: 'Head',
    setup() {
        const profile_photo = ref('http://www.baidu.com/link?url=YyLftgwp9TxGfvGq4xxHnB8m_BxhN9-fWibCmOkDL-eJLS_WrshazbzC_k1Z1kATA2v_EjCdehfaCKFFC8pamj5RZbUUEj8lpOPShXiihKA0dLrVmz0OT6MF1ps6ryqMrsPOqxaBi0WmvXQqT6pEtUFyjP-bhtA6hvnnf8wNLxF1avEspR_mM-EESIVohYHNrsz6E6YGMyCwgyPCmpp7iVKFZpr8IL_rg21JUHOOeWI8hrHJCwxByhoB8gIjuMKW1-5HgoePTRP1WDOL2KQ2Em5oLO_d8I8KeAWU-s1TtJ-2cQK1KDBuBFxtCM3J11CChfDrIDPZlnHXEbwETlLcYy6n0eOBEou14cHn6A4AA-O8I2GIxtR__gLtLluJN34zIF2d9dkjOuZde-5evzAOvYBrMrfq_pL7xKutW-W3Gbfv0cNkLM4hVIKWKp-VKe5viWjsrZSfmF0UbosPIUDT0LAegZIeB6k3hS0ge5aPICH5j8qrHRppHUpos-NvRcadr_gO-UK7QiOIWguDqg-6JHqCWyyG7Wb-pNkIsZ6KlXKIen5RGNGLtIXgU9m9_EKOThXtXLBsE5LKFJpL_NspZ5HjMIzGqeedu3W0Hwdv6TlSkzdLGaGNRlfC8nzz6LGsssMl6c9AUFnr1w38D9f-bQ-I__NRWWtp5U4v52uiVNWb5Oz9nm-_SOKkNu0ymmXQ&wd=&eqid=bc274af1000b307d0000000263e4bc0c')
        const isAlive = ref(false);
        const usergoto = ref('/login')
        const input = ref('')
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const qiehuan = () => {
            usergoto.value = '/user'
        }
        return { profile_photo, handleSelect, usergoto, qiehuan, input }
    },
    mounted() {
        http.get('/admin/info', {}).then((resp) => {
            if(resp) {
                alert(JSON.stringify(resp))
            } else {
                alert('登录失败')
            }
        })
    }
}
</script>

<style  scoped>
.header-posi {
    background-color: #fff;
    box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent, 0 1px 4px 0 rgba(0, 0, 0, .02), 0 2px 12px 0 rgba(0, 0, 0, .04), 0 2px 6px 0 rgba(0, 0, 0, .02);
    height: 56px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 101;

}

.header-opt {
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0 auto;
    width: 1200px;
}

.options {
    align-items: center;
    display: flex;
    height: 100%;
    margin-right: 56px;
    width: 450px;
}

.option {
    color: #333;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 16px;
    height: 100%;
    padding: 0 12px;
    position: relative;
    transition: all .2s ease;
    align-items: center;
    display: flex;
}

.search {
    width: 600px;
    
}
.search-input{
    width: 250px;
    height: 40px;
    position: fixed;
}
.search-button{
    float: right;
}
.profile {
    height: 32px;
    width: 32px;
    line-height: 32px;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.el-col div {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height:30px; line-height:30px; width:100px; */
}

.el-dropdown {
    color: #333;
    font-size: 14px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;

}

.header-profile {
    position: absolute;
    top: 50%;
    left: 50%;
}

.logo {
    display: flex;
    left: 0px;
    background-color: aqua;
    margin-right: 20px;
}
</style>