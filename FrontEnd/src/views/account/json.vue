<template>
  <div class="margin_2"></div>
  {{ pokemons }}
</template>

<script>
export default {
  name: "Json",
  data: () => {
    return {
      pokemons: {},
    };
  },
  methods: {},
  mounted() {
    this.pokemons = {
      Theo: { name: "Stoffelbach" },
      Adrien: { name: "Vergers", age: 18 },
    };
    
    console.log("eddede");
  },
};
</script>

<style scoped>
.margin_2 {
  margin-top: 100px;
}
</style>