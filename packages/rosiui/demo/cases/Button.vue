<template>
  <div>
    <r-button theme="primary">都是</r-button>
    <r-button theme="success">都是</r-button>
    <r-button theme="warning">都是</r-button>
    <r-button theme="danger">都是</r-button>
    <r-button theme="light">都是</r-button>
    <r-button theme="dark">都是</r-button>
    <r-button theme="info">都是</r-button>
    <r-button theme="link">都是</r-button>
  </div>
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
