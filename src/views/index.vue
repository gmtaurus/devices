<template>
    <h3>设备列表</h3>
    <div class="table-responsive">
        <table class="table table-striped table-hover selfTable">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>设备编号</th>
                    <th>设备名称</th>
                    <th>设备IMEI</th>
                    <th>设备入库时间</th>
                    <th>设备状态</th>
                    <th>设备借出状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{$index+1}}</td>
                    <td>{{item.deviceId}}</td>
                    <td>{{item.deviceName}}</td>
                    <td>{{item.IMEI}}</td>
                    <td>{{item.storageTime}}</td>
                    <td>{{item.deviceState | statusFormat}}</td>
                    <td>{{item.borrowState | borrowStatusText}}</td>
                    <td>
                        <a class="btn btn-sm btn-danger" v-if="item.deviceState!=2" @click="dumpDevice(item.deviceId)">报废</a>
                        <a class="btn btn-sm btn-success" v-if="item.borrowState=='1'" @click="entryDevice(item.deviceId)">归还</a>
                        <a class="btn btn-sm btn-primary" v-if="item.borrowState=='0'" @click="borrowOut(item.deviceId)">借出</a>
                        <a class="btn btn-sm btn-default" @click="editDevice(item.deviceId)">编辑</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <modal :ok-class="okClass" :ok-text="okText" :cancel-text="cancelText" :show.sync="show" @ok="ok" @cancel="cancel">
        <div slot="header">{{title}}</div>
        <div>{{dynamicContent}}</div>
    </modal>
    <modal :ok-class="okClass" :ok-text="okText" :cancel-text="cancelText" :show.sync="showEntry" @ok="okEntry" @cancel="cancelEntry">
        <div slot="header">{{title}}</div>
        <div>
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">归还人</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="归还人">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">归还时间</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="归还时间，例如：2016-11-29">
                    </div>
                </div>
            </form>
        </div>
        <!-- <div slot="title">Modal Title</div> -->
        <!-- <div slot="footer">Modal Footer</div> -->
    </modal>
    <modal :ok-class="okClass" :ok-text="okText" :cancel-text="cancelText" :show.sync="showBorrow" @ok="okBorrow" @cancel="cancelBorrow">
        <div slot="header">{{title}}</div>
        <div>
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">借出人</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="借出人">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">借出时间</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="借出时间，例如：2016-11-29">
                    </div>
                </div>
            </form>
        </div>
        <!-- <div slot="title">Modal Title</div> -->
        <!-- <div slot="footer">Modal Footer</div> -->
    </modal>
</template>
<script>
    import {
        statusFormat,
        borrowStatusText
    } from '../filters/common';
    import modal from '../components/modal';
    // import Time from '../directives/time';
    export default {
        filters: {
            statusFormat, borrowStatusText
        },
        // directives: {
        //     time: Time
        // },
        data () {
            return {
                list: [],
                show: false,
                showEntry: false,
                showBorrow: false,
                title: '',
                dynamicContent: '',
                okClass: 'btn btn-success',
                okText: '确定',
                cancelText: '取消',
                deviceid: ''
            }
        },
        ready () {
            // 请求数据
            this.list = [
                {
                    'deviceId': '1001001',
                    'deviceName': 'iphone4',
                    'IMEI': '1272127908098',
                    'storageTime': '2016-01-01',
                    'deviceState': '1',
                    'borrowState': '1'
                },
                {
                    'deviceId': '1001002',
                    'deviceName': 'iphone5',
                    'IMEI': '1272127908098',
                    'storageTime': '2016-01-01',
                    'deviceState': '1',
                    'borrowState': '0'
                }
            ];
        },
        components: {
            modal
        },
        methods: {
            ok: function (){
                let id = this.deviceid;
                // 调接口update报废
                this.show = false;
            },
            cancel: function (){
                this.show = false;
            },
            okEntry: function (){

            },
            cancelEntry: function (){
                this.showEntry = false;
            },
            okBorrow: function (){

            },
            cancelBorrow: function (){
                this.showBorrow = false;
            },
            dumpDevice: function (id){
                this.title = '确认框';
                this.dynamicContent = '确定要报废吗？';
                this.show = true;
                this.deviceid = id; //要处理的设备id号
            },
            entryDevice: function (id){
                this.title = '设备入库';
                this.deviceid = id; //要处理的设备id号
                this.showEntry = true;
            },
            borrowOut: function (id) {
                this.title = '设备借出';
                this.deviceid = id; //要处理的设备id号
                this.showBorrow = true;
            },
            editDevice: function (id){
                location.href = '/create?id=1001001'
            }
        }
    }
</script>
