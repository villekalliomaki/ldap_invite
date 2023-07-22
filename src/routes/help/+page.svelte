<script lang="ts">
	import { Row, Column, Accordion, Tile, AccordionItem, Link } from 'carbon-components-svelte';
</script>

<Row>
	<Column>
		<Tile>
			<h2>Documentation</h2>
			<p>User guide for the website.</p>
		</Tile>
		<Accordion>
			<AccordionItem title="Reset your password">TODO</AccordionItem>
			<AccordionItem title="Use an invite link">TODO</AccordionItem>
			<AccordionItem title="Creating invites"
				>Only the management/admin can create new links. This can be automated, but is not supported
				by the application itself.</AccordionItem
			>
		</Accordion>
		<Tile>
			<p>
				Source code: <Link href="https://github.com/villekalliomaki/ldap_invite">GitHub</Link>
			</p>
			<p>Instance host contact (optional): email at example dot com</p>
		</Tile>
	</Column>
</Row>
