<template>
  <div id="vbody">这里放置内容  {{ $route.params.id }}</div>
</template>

<script>
var treeData=[
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }];
export default {
  name: 'body',
  watch:{
    '$route'(to, from){
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style scoped>
  #vbody{
    margin-top: 20px;
  }
</style>
