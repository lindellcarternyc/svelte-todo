<script lang="ts">
  export let name: string
  export let email: string
</script>

<div>
  <p>{name}</p>
  <p>{email}</p>
</div>

<style>
  p:first-child {
    font-weight: 500;
    font-size: 1.25rem;
  }
</style>