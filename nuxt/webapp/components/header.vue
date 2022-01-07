<template>
  <div class="flex items-center justify-around w-full border-b border-gray-700" style="height: 100px">
    <h1 class="text-white">TEMPLATE {{ fullName }}</h1>
    <button v-if="!this.$auth.loggedIn" class="text-white" @click="connect">Connect</button>
    <button v-else class="text-white" @click="disconnect">Disconnect</button>
    <h1 class="text-white">{{ $auth.user }}</h1>
  </div>
</template>

<script lang="ts">

import { Component, Vue, namespace } from 'nuxt-property-decorator'
const user = namespace('user')
@Component
export default class Header extends Vue {

  mounted()
  {
    console.log('salut')
  }

  connect()
  {
      let res = this.$auth.loginWith('local', {
        data: {
          username: 'Max',
          password: 'admin'
        }
      }).then((res) => {
        console.log('Connexion authorized')
      }).catch((err) => {
        console.log('Connexion denied')
      })
      // console.log(res)
  }

  disconnect()
  {
    this.$auth.logout()
  }

  @user.Getter
  fullName!: string

}

</script>
