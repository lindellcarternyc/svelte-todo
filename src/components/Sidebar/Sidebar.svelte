<script lang="ts">
import GroupList from "./GroupList/GroupList.svelte";

import Namebar from "./Namebar/Namebar.svelte";
import Search from "./Search.svelte";

export let searchTerm: string
export let handleInput: (_: string) => void

const user = {
  name: 'Lindell Carter',
  email: 'lindellcarternyc@gmail.com'
}

let isAddingList = false

const handleClickNewList = () => {
  isAddingList = true
}

</script>

<div class="sidebar">
  <Namebar user={user} />
  <Search searchTerm={searchTerm} handleInput={handleInput}/>
  <GroupList 
    isAddingList={isAddingList}
    on:createList={() => isAddingList = false}
    on:cancelCreateList={() => isAddingList = false}
  />
  <div class="buttons">
    <button class="new-list" on:click={handleClickNewList}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      Add New List</button>
    <button class="new-group">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    </button>
  </div>
</div>

<style>
.sidebar {
  width: 300px;
  display: none;
  height: 100vh;
  position: relative;
  background-color: lightgrey;
  padding: 0.75rem;
  overflow: hidden;
}

.buttons {
  position: absolute;
  background-color: lightgray;
  padding: 0.75rem;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
}

button {
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.new-list {
  display: flex;
}

.new-list svg {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.new-group svg {
  width: 24px;
  height: 24px;
}

@media (min-width: 900px) {
  .sidebar {
    display: block;
  }
}
</style>