<template>
    <div id="app">
        <el-row :gutter="24">
            <el-col :span="24"><vhead></vhead></el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="4"> <vleft></vleft></el-col>
            <el-col :span="17"><router-view></router-view></el-col>
        </el-row>
        <el-row :gutter="24" >
            <el-col :span="24"><vfoot ></vfoot></el-col>
        </el-row>
    </div>
</template>

<script>
    import vhead from './components/Vhead'
    import vfoot from './components/Vfoot'
    import vleft from './components/Vleft'
    export default {
        name: 'app',
        components: { vhead, vfoot, vleft }
    }
</script>

<style>
    body{
        margin: 0;
        padding:5px 12px;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
