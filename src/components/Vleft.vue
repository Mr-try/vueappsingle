<template>
    <div id="main-left">
        <el-tree :data="data" :highlight-current=true :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<style>
    #main-left {
        margin-top: 20px;
        background-color: #324157;
    }
</style>

<script>
    import router from '../router'

    export default {
        data() {
            return {
                data: [{
                    label: '一级 1',
                    id: "1",
                    children: [{
                        label: '二级 1-1',
                        id: "1-1",
                        children: [{
                            id: "1-1-1",
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    id: "2",
                    children: [{
                        id: "2-1",
                        label: '二级 2-1',
                        children: [{
                            id: "2-1-1",
                            label: '三级 2-1-1'
                        }]
                    }, {
                        id: "2-2-2",
                        label: '二级 2-2',
                        children: [{
                            id: "2-2-1",
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    id: "3",
                    label: '一级 3',
                    children: [{
                        id: "3-1",
                        label: '二级 3-1',
                        children: [{
                            id: "3-1-1",
                            label: '三级 3-1-1'
                        }]
                    }, {
                        id: "3-2",
                        label: '二级 3-2',
                        children: [{
                            id: "3-2-1",
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label',
                    id: 'id'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data.id);
                let state = {
                    data: data,
                };
//                history.pushState(state, "treeId", "/#/test");
                router.push(data.id)
            }
        }
    };
</script>
