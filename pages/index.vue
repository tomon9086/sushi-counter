<template>
  <div>
    <div class="button-container">
      <router-link class="proceed" to="/count">
        <div>
          使ってみる
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .proceed, .proceed:visited, .proceed:hover {
    color: #f6eedf;
    text-decoration: none;
  }

  .proceed > div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    border-radius: 10px;
    background-color: #f57b51;
  }
</style>
