<template>
  <div class="container">
    <router-link to="/setting">
      <div class="button">
        <img src="/icon/setting.svg" alt="setting">
      </div>
    </router-link>
    <router-link to="/count">
      <div class="center button">
        <img src="/icon/sushi.svg" alt="count">
      </div>
    </router-link>
    <router-link to="/bill">
      <div class="button">
        <img src="/icon/bill.svg" alt="bill">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    background-color: #ffd31d;
  }

  .container .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }

  .container .button > img {
    height: 100%;
  }

  .container .button.center {
    position: relative;
    bottom: 15px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #d63447;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .4);
  }
</style>
