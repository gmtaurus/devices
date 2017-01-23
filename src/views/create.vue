<style scoped lang="less">
    h1{
        color: #28a7e1;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
        img{
            width: 150px;
        }
    }
</style>
<template>
    <h3>设备{{text}}</h3>
    <form class="form-horizontal">
        <div class="form-group">
            <label class="col-sm-2 control-label">设备id</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备id" v-model="deviceId">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">设备名称</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备名称" v-model="deviceName">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">设备IMEI</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备IMEI" v-model="IMEI">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">设备入库时间</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备入库时间" v-model="storageTime">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">设备状态</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备状态" v-model="deviceState">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">设备借出状态</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="设备借出状态" v-model="borrowState">
            </div>
        </div>
    </form>
    <div class="row">
        <div class="col-sm-2 text-right"><button class="btn btn-primary" @click="createSubmit">提交</button></div>
        <div class="col-sm-4 text-left"><button class="btn btn-defaute" @click="cancleSubmit">取消</button></div>
    </div>
</template>
<script>
    import {
        statusFormat,
        borrowStatusText
    } from '../filters/common';
    
    export default {
        filters: {
            statusFormat, borrowStatusText
        },
        data () {
            return {
                'deviceId': '',
                'deviceName': '',
                'IMEI': '',
                'storageTime': '',
                'deviceState': '',
                'borrowState': '',
                 text: ''
            }
        },
        created: function(){
            let me = this;
            let params = location.search;
            if (params) {
                me.text = '编辑';
                // 获取单条数据
                // let listAjax = $.ajax({
                //     url: showDevice+params,
                //     type: 'get',
                //     success: function(data){
                //         me.deviceId = data.deviceId;
                //         me.deviceName = data.deviceName;
                //         me.IMEI = data.IMEI;
                //         me.storageTime = data.storageTime;
                //         me.deviceState = data.deviceState;
                //         me.borrowState = data.borrowState;
                //     }
                // });
            } else {
                me.text = '创建';
            } 
        },
        methods: {
            cancleSubmit: ()=>{
                location.href='/';
            },
            createSubmit: function(){
                let submitData = {
                    'deviceId': this.deviceId,
                    'deviceName': this.deviceName,
                    'IMEI': this.IMEI,
                    'storageTime': this.storageTime,
                    'deviceState': this.deviceState,
                    'borrowState': this.borrowState
                };
                // 保存数据
                // let listAjax = $.ajax({
                //     url: addDevice,
                //     type: 'get',
                //     data: submitData,
                //     success: function(data){
                //         let error_no = data.error_no;
                //         if (error_no == 0) {
                //             // 保存成功
                //             location.href = listDevice;
                //         } else {
                            
                //         }
                //     }
                // });
            }
        }
    }
</script>
