<template>
  <div class="flex items-center justify-around w-full border-b border-gray-700" style="height: 100px">
    <h1 class="text-white">TEMPLATE {{ fullName }}</h1>
    <button class="text-white" @click="connect">Connect</button>
    <button class="text-white" @click="disconnect">Disconnect</button>
    <h1 class="text-white">{{ $auth.user }}</h1>
  </div>
</template>

<script lang="ts">

import { Component, Vue, namespace } from 'nuxt-property-decorator'
const user = namespace('user')
@Component
export default class Header extends Vue {

  data: object = {
    username: 'Forward',
    password: 'Admin'
  }

  mounted()
  {
    console.log('salut')
  }

  connect()
  {
    try {
      this.$auth.loginWith('local', this.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  disconnect()
  {
    this.$auth.logout()
  }

  @user.Getter
  fullName!: string

}

</script>
