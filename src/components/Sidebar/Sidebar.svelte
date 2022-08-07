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

</script>

<div class="sidebar">
  <Namebar user={user} />
  <Search searchTerm={searchTerm} handleInput={handleInput}/>
  <GroupList />
  <div class="buttons">
    Buttons
  </div>
</div>

<style>
.sidebar {
  border: 1px solid red;
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
  border: 1px solid green;
  width: 100%;
  bottom: 0;
  left: 0;
}

@media (min-width: 900px) {
  .sidebar {
    display: block;
  }
}
</style>