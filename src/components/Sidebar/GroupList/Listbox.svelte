<script lang="ts">
export let style = ''
</script>

<div class="list-box" style={style}>
  <slot></slot>
</div>

<style>
  .list-box {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    position: relative;
    cursor: pointer;
  }

  .list-box:hover {
    background-color: rgba(125, 125, 125, 0.5);
  }
</style>