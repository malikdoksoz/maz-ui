---
title: MazDialogPromise
description: MazDialogPromise is a standalone component to dialog with user, component to show important informations to the user and propose confirmation, you should waiting his response with await.
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<!--@include: ./../.vitepress/mixins/getting-started.md-->

::: info
This component use [MazDialog](./maz-dialog.md), so it inherits all his props
:::

::: tip
This component use `<Teleport to="body">` with [MazBackdrop](./maz-backdrop.md), so you can implement this component everywhere and it inherits all his props
:::

MazDialogPromise is a standalone component to dialog with user, component to show important informations to the user and propose confirmation, you should waiting his response with await.

## Basic usage

<MazBtn @click="askToUser">Ask to user</MazBtn>

<MazDialogPromise
  :data="{
    title: 'Delete user',
    message: 'Are you sure to delete this user ?',
  }"
  identifier="one"
/>
<MazDialogPromise identifier="two">
  <template #title>
    Really delete this user ?
  </template>
  <template #default>
    Are you really really sure to delete this user ?
  </template>
</MazDialogPromise>

<MazDialog v-model="confirmDialog">
  <template #title>
    User deleted
  </template>
  <template #default>
    User is deleted !
  </template>
</MazDialog>

<script setup>
  import { ref } from 'vue'
  import {
    useMazDialogPromise,
  } from 'maz-ui/components/MazDialogPromise'

  const { showDialogAndWaitChoice } = useMazDialogPromise()
  const confirmDialog = ref(false)

  const askToUser = async () => {
    await showDialogAndWaitChoice('one')
    await showDialogAndWaitChoice('two')
    confirmDialog.value = true
  }
</script>

```vue
<template>
  <MazBtn @click="askToUser">Ask to user</MazBtn>

  <MazDialogPromise
    :data="{
      title: 'Delete user',
      message: 'Are you sure to delete this user ?',
    }"
    identifier="one"
  />
  <MazDialogPromise identifier="two">
    <template #title>
      Really delete this user ?
    </template>
    <template #default>
      Are you really really sure to delete this user ?
    </template>
  </MazDialogPromise>

  <MazDialog v-model="confirmDialog">
    <template #title>
      User deleted
    </template>
    <template #default>
      User is deleted !
    </template>
  </MazDialog>
</template>

<script setup>
  import { ref } from 'vue'
  import MazDialogPromise, {
    useMazDialogPromise,
  } from 'maz-ui/components/MazDialogPromise'
  import MazDialog from 'maz-ui/components/MazDialog'

  const confirmDialog = ref(false)

  const { showDialogAndWaitChoice } = useMazDialogPromise()

  const askToUser = async () => {
    await showDialogAndWaitChoice('one')
    await showDialogAndWaitChoice('two')
    confirmDialog.value = true
  }
</script>
```

## Props & Events emitted

<ComponentPropDoc component="MazDialogPromise" />
