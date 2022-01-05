<template>
  <div class="w-full bg-black" style="height: 100vh">
    <Header></Header>
    <Nuxt/>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import Header from "~/components/header.vue";
@Component({
  components: {Header}
})
export default class Layout extends Vue {

}

</script>

<style>

</style>
