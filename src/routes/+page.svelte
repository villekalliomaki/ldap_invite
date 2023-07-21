<script lang="ts">
	import 'carbon-components-svelte/css/g90.css';

	import { Button } from 'carbon-components-svelte';
	import log from '$lib/log';

	log.info('Opened front page');

	async function server_sum() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ counter, sum }),
			headers: {
				'content-type': 'application/json'
			}
		});

		sum = await response.json();
		counter = 0;
	}

	let counter = 0;
	let sum = 0;
</script>

<h2>Local counter: {counter}</h2>
<Button on:click={() => counter++}>Local +1</Button>
<h2>Local sum: {sum}</h2>
<Button on:click={server_sum}>From local to sum</Button>
