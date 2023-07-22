<script lang="ts">
	import {
		Row,
		Column,
		Form,
		FormGroup,
		PasswordInput,
		Button,
		ToastNotification
	} from 'carbon-components-svelte';

	export const ssr = false

	export let form;
</script>

<Row>
	<Column lg={6} md={6} sm={4} style="margin-left: auto; margin-right: auto;">
		{#if !true}
			<ToastNotification title="You are already logged in" hideCloseButton />
		{:else}
			<Form on:submit method="POST">
				<FormGroup>
					<PasswordInput
						name="password"
						labelText="Admin password"
						required
						invalid={form?.incorrect}
						invalidText={form?.incorrect ? 'Incorrect password' : ''}
					/>
				</FormGroup>
				<Button type="submit">Log in</Button>
			</Form>
		{/if}
	</Column>
</Row>
