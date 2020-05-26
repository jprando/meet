<template>
<div>
  <button @click="iniciar" :disabled="joined">iniciar</button>
  <button @click="sair">sair</button>
  <vue-webrtc ref="vwrtc" width="100%" roomId="publicRoom"></vue-webrtc>
</div>
</template>

<script>
// ISSUE 5: https://github.com/westonsoftware/vue-webrtc/issues/5
import * as io from 'socket.io-client'
window.io = io
//


export default {
    name: 'viewWebRTC',
    data() {
        return {
            joined: false
        }
    },
    methods:{
        iniciar() {
            this.$refs.vwrtc.join()
            this.joined = true
        },
        sair() {
            this.$refs.vwrtc.leave()
            this.joined = false
        }
    }
}
</script>

<style scoped>

</style>