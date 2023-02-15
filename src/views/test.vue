<!-- <template>
    <div>
        <nav>
            　　<ul>
                　　　　<li v-for="(item, i) in navData" :class="{ nav_li: active === i }" :key="i"
                    @click="$router.push({ path: item.path }), active = i">
                    　　　　　　{{ item.name }}
                    　　　　</li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
export default {
    name: 'test',
    setup() {
        const active = 0;
            const navData = [
                { name: '1', path: '/test1' },
                { name: '2', path: '/test2' },
                { name: '3', path: '/login' },
                { name: '4', path: '/home' },
                { name: '5', path: '/head' }
            ]


        return { active, navData }
    }
}
</script>

<style scoped>
ul {
    width: 1200px;
    height: 88px;
    line-height: 88px;
    margin: 0 auto;
    background: #3b2d50;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: space-between;

    li {
        text-align: center;
    }

    .nav_li {
        background-color: #dedede;
        color: #353535;
    }
}
</style> -->