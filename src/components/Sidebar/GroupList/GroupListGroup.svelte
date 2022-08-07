<script lang="ts">
import type { TaskListGroup } from '../../../interfaces'
import Listbox from './Listbox.svelte';
import GroupListItem from './GroupListItem.svelte';

export let group: TaskListGroup

let expanded = false
</script>

<div class:expanded>
  <Listbox>
    <header on:click={() => expanded = !expanded}>
      <p>{group.title}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </header>
  </Listbox>
  <div class="lists">
    {#each group.lists as list (list.id)}
    <GroupListItem list={list} style="padding-left: 1.5rem"/>
    {/each}
  </div>
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .lists {
    display: none;
  }

  .expanded svg {
    transform: rotate(180deg);
  }

  .expanded .lists {
    display: block;
  }
</style>