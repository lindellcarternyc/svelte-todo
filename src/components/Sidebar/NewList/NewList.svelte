<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import { listStore } from "../../../stores/tasks-lists.store";
import Listbox from "../GroupList/Listbox.svelte";
import TextInput from "../../TextInput.svelte";

let title: string
let newListInputWrapper: HTMLDivElement
let focused = false
let createdFromKeyup = false
let cancelled = false

const dispatch = createEventDispatcher()

const handleFocus = () => {
  focused = true
}

const handleBlur = () => {
  focused = false
  if (!createdFromKeyup && !cancelled) {
    createList(title)
  }
  createdFromKeyup = false
  cancelled = false
}

const handleKeyup = (evt: KeyboardEvent) => {
  if (evt.code === 'Enter') {
    createdFromKeyup = true
    createList(title)
  } else if (evt.code === 'Escape') {
    cancelled = true
    dispatch('cancelCreateList')
  }
}

const createList = (title: string) => {
  listStore.createList({ title })
  dispatch('createList')
}

onMount(() => {
  title = 'Untitled List'
  newListInputWrapper.scrollIntoView()
  window.addEventListener('keyup', handleKeyup)
})

onDestroy(() => {
  window.removeEventListener('keyup', handleKeyup)
})
</script>

<Listbox style={focused ? 'border: 2px solid black' : ''}>
  <div bind:this={newListInputWrapper} class='newListInputWrapper'>
    <TextInput 
      id='new-list-title'
      name='new-list-title'
      value={title}
      handleInput={(newTitle) => title = newTitle}
      onFocus={handleFocus}
      onBlur={handleBlur}
      on:mounted={handleFocus}
    />
  </div>
</Listbox>

<style>
  .newListInputWrapper {
    width: 100%;
  }
</style>