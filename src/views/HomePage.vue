<template>
  <div class="homepage-wrap">
    <group>
      <cell title="客户端测试" value="嘟嘟充电宝"></cell>
      <cell title="设备ID" value="暂无数据"></cell>
      <cell title="物联网卡UUID"></cell>
      <cell title="信号强度"></cell>
    </group>
    <div btn-wrap>
      <x-button type="primary" @click.native="scan">扫一扫</x-button>
      <x-button type="primary" @click.native="bind">机柜绑定</x-button>
    </div>
  </div>
</template>
<script>
  import {XHeader, Group, Cell, XButton} from 'vux'
  import wx from 'weixin-js-sdk'

  export default{
    components: {
      XHeader, Group, Cell, XButton
    },
    data() {
      return {
        deviceId: '',
      }
    },
    methods: {
      init() {
        this.$ajax({
          url: this.$config.api.getSign,
          method: 'post',
          data: {
            url: location.href.split('#')[0]
          }
        }).then(res => {
          wx.config({
            debug: this.$config.scanCodeDebug,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ['scanQRCode']
          })
        }).catch(err => {
          this.$vux.toast.text(err.resultDesc)
        })
      },
      scan() {
        let _this = this;
        wx.ready(function() {
          wx.checkJsApi({
            jsApiList: ['scanQRCode'],
            success: function (res) {
              if(res.checkResult.scanQRCode === true) {
                wx.scanQRCode({
                  needResult: 1,
                  scanType: ['qrCode', 'barCode'],
                  success: function(res) {
                    _this.deviceId = res.resultStr;
                  }
                })
              }
            },
            fail: function(err) {
              _this.$vux.toast.text(err.errMsg)
            }
          })
        })
        wx.error(function(err) {
          _this.$vux.toast(err.errMsg);
        })
      }
    },
    mounted() {
      this.init()
    }
  }
</script>
