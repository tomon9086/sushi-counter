<template>
  <div class="root-layout">
    <header>
      <sushi-header />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <tabs />
    </footer>
  </div>
</template>

<script>
import SushiHeader from '@/components/Header'
import Tabs from '@/components/Tabs'

export default {
  components: {
    'sushi-header': SushiHeader,
    Tabs
  },
  beforeCreate () {
    const name = this.$store.getters['setting/presetNames'][0] || 'スシロー'
    this.$store.dispatch('setting/usePreset', name)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.root-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.root-layout > header {
  position: sticky;
  top: 0;
}

.root-layout > main {
  flex-grow: 1;
}

.root-layout > footer {
  position: sticky;
  bottom: 0;
}
</style>
