<script lang="ts">
export let searchTerm: string
export let handleInput: (_: string) => void

let focused = false
</script>

<div class:focused>
  <input 
    type="text" 
    name="search" 
    id="search" 
    on:focus={() => focused = true}
    on:blur={() => focused = false}
    placeholder="Search"
    value={searchTerm}
    on:input={e => handleInput(e.currentTarget.value)}
  />
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>

<style>
  div {
    background-color: white;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    border: 0.25rem;
    border-radius: 0.25rem;
  }

  .focused {
    border: 1px solid;
  }

  input {
    flex-grow: 1;
    outline: none;
    border: none;
    padding-top: 0.5rem;
  }

  svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 0.25rem;
  }
</style>