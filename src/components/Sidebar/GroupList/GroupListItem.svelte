<script lang="ts">
import type { TaskList } from '../../../interfaces'
import Listbox from './Listbox.svelte';

export let list: TaskList
export let style = ''

$: count = list.tasks.length

</script>

<Listbox style={style}>
  <div>
    <p>{list.title}</p>
    <p>{count}</p>
  </div>
</Listbox>

<style>
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  div p:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.125rem 0.375rem;
    border-radius: 50%;
  }
</style>