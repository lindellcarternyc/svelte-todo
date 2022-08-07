<script lang="ts">
export let initials: string
</script>

<div>
  <p>{initials}</p>
</div>

<style>
  div {
    height: 50px;
    width: 50px;
    background: lightblue;
    display: flex;
    place-items: center;
    place-content: center;
    text-align: center;
    border-radius: 50%;
    font-weight: 500;
    color: white;
  }
</style>