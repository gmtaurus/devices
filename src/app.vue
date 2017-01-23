<style scoped>
    @import './styles/bootstrap.css';
    @import './styles/common.css';
</style>
<template>
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">设备管理系统</a>
            </div>
        </div>
    </nav>
    <div class="container-fluid contentContaier">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active"><a href="/">设备列表</a></li>
                    <li><a href="/create">添加新设备</a></li>
                    <li><a href="/records">设备借出记录</a></li>
                </ul>
            </div>
            <div class="col-sm-9 col-md-10 main">
                <div id="table">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
