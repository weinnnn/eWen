<template>
    <div>
        <el-form :rules="rules" ref="ruleFormRef" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">平台登录</h3>
            <el-form-item prop="username">
                <el-input type="text" auto-complete="false" v-model="loginForm.username"
                    placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password"
                    placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" v-model="loginForm.code" placeholder="点击图片更换验证码"
                    style="width: 250px; margin-right: 5px;"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha" style="height: 38px;    width: 95px;" />
            </el-form-item>

            <el-checkbox class="loginRemember" label="" v-model="checked">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%; height: 38px;" @click="submit(ruleFormRef)">登录</el-button>


        </el-form>


    </div>
</template>

<script lang = "ts">

import http from '@/utils/http';
import { ElAlert, ElMessage, FormInstance, FormRules } from 'element-plus'
import { Http2ServerRequest } from 'http2';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const router = useRouter();
        const loginForm = reactive({
            username: 'admin',
            password: '111',
            code: ''
        });
        const ruleFormRef = ref<FormInstance>()
        let captchaUrl = ref('/api/captcha?time=' + new Date());
        const rules = reactive<FormRules>({
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
        });
        const checked = true

        const updateCaptcha = () => {
            captchaUrl.value = '/api/captcha?time=' + new Date();
        };

        const submit = async (formEl: FormInstance | undefined) => {
            if (!formEl) return;
            await formEl.validate((valid, fields) => {
                if (valid) {
                    http.post('/login', loginForm).then((res) => {
                        if (res) {
                            const token = res.obj.tokenHead + res.obj.token;
                            localStorage.setItem('token', token)
                            router.replace('/');
                        }
                    })
                } else {
                    ElMessage({
                        message: '请输入所有字段',
                        type: 'error',
                    })

                    return false;
                }
            });
        };
        // 暴露给模板
        return {
            loginForm, rules, captchaUrl, checked, ruleFormRef,
            updateCaptcha, submit
        }
    }
}

// export default {
//     name: "Login",
//     data() {
//         return {
//             captchaUrl: '/captcha?time=' + new Date(),
//             loginForm: {
//                 username: 'admin',
//                 password: '111',
//                 code: ''
//             },
//             checked: true,
//             radio: 1,
//             rules: {
//                 username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
//                 password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
//                 code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
//             }
//         }
//     },
//     methods: {
//         updateCaptcha() {
//             this.captchaUrl = '/captcha?time=' + new Date();
//         },
//         submit() {
//             this.$refs.loginForm.validate((valid) => {
//                 if (valid) {
//                     postRequest('/login', this.loginForm).then(resp=>{
//                         if(resp) {
//                             this.$router.replace('/home');
//                         }
//                     })
//                 } else {
//                     this.$ElAlert.error('请输入所有字段');
//                     return false;
//                 }
//             });
//         }
//     }
// }
</script>

<style>
.loginContainer {
    /* 圆角边框 */
    border-radius: 15px;
    /* 确定背景的裁剪区域 */
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}

.el-form-item__content {

    display: flex;
    align-items: center;
}

.el-input__inner {
    height: 38px;
}
</style>