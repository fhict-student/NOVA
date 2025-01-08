<<<<<<< Updated upstream
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
=======
<svelte:head>
	<title>NOVA - Home</title>
</svelte:head>

<main
	class="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark"
>
	<section class="py-12 text-center">
		<!-- <h1 class="text-5xl font-bold text-text-light dark:text-text-dark">Welkom bij NOVA</h1> -->
		<h1
			class="mt-80 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent"
		>
			Welkom bij NOVA
		</h1>
		<p class="mt-4 mb-60 text-xl text-gray-600 dark:text-gray-300">
			Next-Generation Optimized Virtual Assistant
		</p>
	</section>

	<!-- <enhanced:img src="/static/arjen/profielfoto.png" alt="test" /> -->
	<!-- <img src="/arjen/profielfoto.png" alt="test" /> -->

			<div class="inline-flex gap-10">
			<a
				href="/arjen"
				class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
			>
				<img
					src="$lib/media/arjen/profielfoto.png"
					class="h-80"
					style="border-radius: 10px;"
					alt="Gezicht van Arjen"
				/>
				<p class="font-semibold m-3 text-center">Arjen, 16 jaar oud</p>
				<div
					class="text-justify max-w-80 text-text-light dark:text-text-dark"
					style="padding-top: 10px;"
				>
				Arjen is een enthousiaste tiener die houdt van technologie en creativiteit. Hij woont bij zijn moeder Marie en oma Helena en zit in zijn laatste jaar van de middelbare school. Naast zijn studies besteedt hij veel tijd aan zijn hobby’s, zoals het bouwen van drones en gamen met vrienden. Arjen is nieuwsgierig naar de wereld om hem heen en vindt het leuk om nieuwe dingen te leren, vooral als het gaat om programmeren en techniek. Hoewel hij leeft in een wereld vol technologie, hecht hij veel waarde aan sociale contacten en quality time met zijn familie. 
				</div>
				<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span> -->
			</a>
			<a
			href="/marie"
			class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
		>
			<img
				src="$lib/media/marie/profielfoto.png"
				class="h-80"
				style="border-radius: 10px;"
				alt="Gezicht van Marie"
			/>
			<p class="font-semibold m-3 text-center">Marie, 47 jaar oud</p>
			<div
				class="text-justify max-w-80 text-text-light dark:text-text-dark"
				style="padding-top: 10px;"
			>
			Marie is een toegewijde moeder en creatieve professional. Ze werkt als freelance ontwerper, wat haar de vrijheid geeft om haar eigen tijd in te delen, maar ook de uitdaging brengt van het combineren van werk en gezin. Marie geniet ervan om tijd door te brengen met haar zoon Arjen en haar moeder Helena, die bij haar inwoont. In haar vrije tijd houdt ze van lezen, koken en samen met haar familie wandelen in de natuur. Marie is zorgzaam en geduldig, maar vindt het soms lastig om even tijd voor zichzelf te nemen in haar drukke leven. 
			</div>
			<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span> -->
		</a>

		<a
		href="/helena"
		class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
	>
		<img
			src="$lib/media/helena/profielfoto.png"
			class="h-80"
			style="border-radius: 10px;"
			alt="Gezicht van Helena"
		/>
		<p class="font-semibold m-3 text-center">Helena, 73 jaar oud</p>
		<div
			class="text-justify max-w-80 text-text-light dark:text-text-dark"
			style="padding-top: 10px;"
		>
		Helena is een warme, levenslustige vrouw en de oma van Arjen. Na een actief leven vol reizen en vrijwilligerswerk woont ze nu bij haar dochter Marie en kleinzoon. Ze geniet ervan om dicht bij haar familie te zijn en waardeert de dagelijkse momenten samen, zoals gezamenlijke maaltijden en gesprekken over het leven. Helena houdt van tuinieren, lezen en verhalen vertellen over vroeger. Ze is optimistisch en staat open voor nieuwe ervaringen, ook al doet ze dingen graag op haar eigen tempo. Voor Helena is familie het allerbelangrijkste, en ze probeert een inspiratie te zijn voor zowel Marie als Arjen. 
		</div>
		<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span> -->
	</a>
</div>


			<!-- <div class="flex flex-wrap justify-center gap-6 px-4">
				{#each gezin as {name, src, titel, description }}
					<div
						class="card flex w-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:w-1/3"
					>
						<a href="/{name.toLowerCase()}">
							<img class="w-full rounded-t-lg" {src} alt="Foto van {name}" />
						</a>
						<div class="flex flex-grow flex-col p-5">
							<a href="/{name.toLowerCase()}">
								<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{name}
								</h5>
							</a>
							<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{titel}</p>
		
							<div class="text-container relative">
								<p class="font-normal text-gray-700 dark:text-gray-400">
									{description}
								</p>
							</div>
		
							<a
								href="/{name.toLowerCase()}"
								class="mt-auto inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Lees meer
								<svg
									class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div> -->
</main>
>>>>>>> Stashed changes
