<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style scoped>
/*quando eu quero travar este estilo apenas para este componente*/

.pill {
  background-color: #dc143c;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px;
  height: 55px;
  border-radius: 30px;

  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin: 10px;
  padding: 5px;
  height: 35px;
  width: 35px;
  border-radius: 18px;

  background-color: #fff;
  color: crimson;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
