<template>
  <r-button theme="primary" round @click="handleClick('hello, rosi')"
    >都是</r-button
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleClick = (str: string) => {
      alert(str)
    }
    return {
      handleClick
    }
  }
})
</script>

<style scoped></style>
