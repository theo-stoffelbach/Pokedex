<template>
  <div class ="poke_img"><img src ="../assets/friend/pokeball_img.png"></div>
</template>

<script>
export default ({
    name: 'Pokemon',
    props: ['id']
})
</script>

<style>
.poke_img {
  border-bottom: red 2px solid;
  
  margin-top: 5em;
  display: flex;
  justify-content: flex-end;
}
.poke_img img {
  width: 140px;
}
</style>