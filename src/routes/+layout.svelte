<script lang="ts">
	import 'carbon-components-svelte/css/g90.css';

	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		Content,
		Grid
	} from 'carbon-components-svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';
	import { goto } from '$app/navigation';

	let menuOpen = false;
</script>

<Header platformName="LDAP Invite">
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="Home" icon={Home} on:click={() => goto('/')} />
		<HeaderGlobalAction aria-label="Help" icon={Help} on:click={() => goto('/help')} />
		<HeaderAction bind:isOpen={menuOpen}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Management</HeaderPanelDivider>
				<HeaderPanelLink href="/admin">Overview</HeaderPanelLink>
				<HeaderPanelLink>Password resets</HeaderPanelLink>
				<HeaderPanelLink>Invites</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<Content>
	<Grid padding>
		<slot />
	</Grid>
</Content>
