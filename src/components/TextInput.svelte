<script lang="ts">
import { createEventDispatcher, onMount } from "svelte";


  export let value: string
  export let placeholder: string = ''

  export let name: string
  export let id: string

  export let handleInput: (_: string) => void

  export let onFocus: () => void
  export let onBlur: () => void

  export let style = ''

  const dispatch = createEventDispatcher()

  let inputRef: HTMLInputElement

  onMount(() =>{
    dispatch('mounted')
    inputRef.focus()
  })
</script>

<div>
  <input type="text" id={id} value={value} name={name}
    on:input={e => handleInput(e.currentTarget.value)}
    on:focus={onFocus}
    on:blur={onBlur}
    placeholder={placeholder}
    style={style}
    bind:this={inputRef}
  />
</div>

<style>
  input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    display: block;
  }
</style>