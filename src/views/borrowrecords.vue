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
                    <th>借出时间</th>
                    <th>归还时间</th>
                    <th>借出人</th>
                    <th>归还人</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{$index+1}}</td>
                    <td>{{item.deviceId}}</td>
                    <td>{{item.deviceName}}</td>
                    <td>{{item.IMEI}}</td>
                    <td>{{item.borrowedTime}}</td>
                    <td>{{item.returnTime}}</td>
                    <td>{{item.borrowedPeople}}</td>
                    <td>{{item.entryPeople}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list: []
            }
        },
        ready () {
            // 请求数据
            this.list = [
                {
                    'deviceId': '1001001',
                    'deviceName': 'iphone4',
                    'IMEI': '1272127908098',
                    'borrowedTime': '2016-01-01',
                    'returnTime': '',
                    'borrowedPeople': 'bb',
                    'entryPeople': 'dd'
                },
                {
                    'deviceId': '1001002',
                    'deviceName': 'iphone5',
                    'IMEI': '1272127908098',
                    'borrowedTime': '2016-01-01',
                    'returnTime': '',
                    'borrowedPeople': 'aa',
                    'entryPeople': 'ee'
                }
            ];
        },
        components: {
        },
        methods: {
        }
    }
</script>
