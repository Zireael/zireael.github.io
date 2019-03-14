<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="transition2" type="transition" mode="out-in" appear>
      <router-view name="route-app"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">

</style>
