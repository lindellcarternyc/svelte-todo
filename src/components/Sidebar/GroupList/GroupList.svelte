<script lang="ts">
import { onDestroy, SvelteComponent } from "svelte"

import type { TaskList, TaskListGroup } from "../../../interfaces";
import { listStore } from '../../../stores/tasks-lists.store'
import NewList from "../NewList/NewList.svelte";

import GroupListGroup from "./GroupListGroup.svelte"
import GroupListItem from "./GroupListItem.svelte"

export let isAddingList: boolean

const isListGroup = (item: any): item is TaskListGroup => {
  return typeof item === 'object' && 'lists' in item
}

let specialLists: TaskList[]
let taskLists: (TaskList | TaskListGroup)[]

const unsub = listStore.subscribe(listData => {
  specialLists = listData.specialLists
  taskLists = listData.taskLists
})

onDestroy(unsub)
</script>

<div class="grouplist">
  <div>
    <ul>
      {#each specialLists as list (list.id)}
      <li>
        <GroupListItem list={list} />
      </li>
      {/each}
    </ul>
  </div>
  <hr />
  <div>
    <ul>
      {#each taskLists as listOrGroup}
        {#if isListGroup(listOrGroup)}
        <GroupListGroup group={listOrGroup} />
        {:else}
        <GroupListItem list={listOrGroup} />
        {/if}
      {/each}
      {#if isAddingList}
      <NewList on:createList on:cancelCreateList />
      {/if}
    </ul>
  </div>
</div>

<style>
  .grouplist {
    padding: 0.75rem 0 5.5rem;
    height: calc(100vh - 120px);
    overflow: auto;
  }

  hr {
    margin: 0.5rem 0;
  }
</style>