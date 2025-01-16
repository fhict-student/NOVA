<svelte:head>
	<title>NOVA - QR-Code</title>
</svelte:head>

<main
	class="flex min-h-screen flex-col items-center justify-center bg-background-light text-text-light dark:bg-background-dark
dark:text-text-dark"
>
	<div class="container mx-auto px-4 pb-8">
		<div class="flex flex-col gap-8 laptop:flex-row laptop:items-start">
			<div class="flex min-w-96 flex-col items-center">
				<enhanced:img src="$lib/media/qr/website.png?w=300" alt="logo" class="min-w-5" />
				<a href="https://nova-home.pages.dev" class="text-blue-600 underline text-lg"
					>https://nova-home.pages.dev</a
				>
			</div>

			<div class="self-center">
				<h1 class="mb-1 text-center text-2xl font-bold">
					NOVA ‒ Next-Gen Optimized Virtual Assistant
				</h1>
				<p class="mb-4 text-base/7">
					Onze opdracht draait om een smart home van 2045, aangestuurd door een geavanceerd
					AI-systeem genaamd NOVA. In ons scenario woont er een gezin met drie generaties samen in
					dit huis. We hebben deze samenstelling gekozen om te onderzoeken hoe verschillende
					leeftijdsgroepen omgaan met deze technologie. Het doel is om bezoekers aan het denken te
					zetten over de impact van zulke innovaties: wat betekent dit voor privacy, en welke
					psychologische effecten kunnen spelen?
				</p>
			</div>
		</div>
	</div>
</main>
