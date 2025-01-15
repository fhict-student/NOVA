<!-- <script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.status}: {page.error.message}</h1> -->

<script>
	// import { Section, Maintenance, Page404 } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';

	import { page } from '$app/state';

	const errorMessages = {
		4: 'Er mist hier iets...',
		5: 'Er is iets misgegaan...'
	};

	$: desc = errorMessages[page.status.toString().split('').at(0)];
</script>

<section
	class="flex min-h-screen flex-col items-center justify-center bg-background-light py-12 text-center dark:bg-background-dark"
>
	<h1
		class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent"
	>
		{page.status}
	</h1>
	<p class="mb-10 mt-4 text-xl text-gray-600 dark:text-gray-300">
		{desc}
	</p>

	<Button href="/" size="lg" class="bg-primary-light dark:bg-primary-dark">Terug naar Home</Button>
</section>
