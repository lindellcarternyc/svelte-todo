<script lang="ts">
import Avatar from "./Avatar.svelte";
import ContactDetails from "./ContactDetails.svelte";

export let user: { 
  name: string
  email: string
}

$: initials = user.name
  .split(' ')
  .map(n => n.charAt(0).toUpperCase())
  .join('')

</script>

<div class="namebar">
  <Avatar initials={initials} />
  <ContactDetails {...user} />
</div>

<style>
  .namebar {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
  }
</style>