<script lang="ts">
import Main from "./components/Main/Main.svelte";
import Sidebar from "./components/Sidebar/Sidebar.svelte";

let searchTerm = ''
const handleInput = (value: string) => {
	searchTerm = value
}
</script>

<div class="app">
	<Sidebar searchTerm={searchTerm} handleInput={handleInput} />
	<Main />
</div>

<style global>
	html, body, * {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.app {
		display: flex;
	}
</style>