---
title: MazInputPrice
description: MazInputPrice is a standalone component replaces the standard html input text and format the text enter according with the currency provided
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<!--@include: ./../.vitepress/mixins/getting-started.md-->

<!--@include: ./../.vitepress/mixins/maz-input-props.md-->

## Basic usage

<MazInputPrice
  v-model="priceValue"
  label="Enter your price"
  currency="USD"
  locale="en-US"
  :min="5"
  :max="1000"
  @formatted="formattedPrice = $event"
/>

priceValue: {{ priceValue }}

formattedPrice: {{ formattedPrice }}
<script lang="ts" setup>
  import { ref } from 'vue'

  const priceValue = ref(2)
  const formattedPrice = ref()
</script>

```vue
<template>
  <MazInputPrice
    v-model="priceValue"
    label="Enter your price"
    currency="USD"
    locale="en-US"
    :min="5"
    :max="1000"
    @formatted="formattedPrice = $event"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import MazInputPrice from 'maz-ui/components/MazInputPrice'

  const priceValue = ref(2)
  const formattedPrice = ref()
</script>
```

## Props, Events emitted

<ComponentPropDoc component="MazInputPrice" />
