<template>
<div>
  <button @click="entrar" :disabled="joined">entrar</button>
  <button @click="sair" :disabled="!joined">sair</button>
  <button @click="compartilharTela" :disabled="!joined">compartilhar tela</button>
  <vue-webrtc ref="vwrtc" cameraHeight="200" width="100%" roomId="publicRoom"></vue-webrtc>
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
        entrar() {
            this.$refs.vwrtc.join()
            this.joined = true
        },
        sair() {
            this.$refs.vwrtc.leave()
            this.joined = false
        },
        compartilharTela() {
            this.$refs.vwrtc.shareScreen()
        }
    }
}
</script>

<style scoped>

</style>