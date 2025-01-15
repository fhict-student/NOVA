<svelte:head>
	<title>NOVA - Home</title>
</svelte:head>

<main
	class="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark"
>
	<section class="py-12 text-center">
		<!-- <h1 class="text-5xl font-bold text-text-light dark:text-text-dark">Welkom bij NOVA</h1> -->
		<h1
			class="mt-80 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text pb-2 text-5xl font-bold text-transparent"
		>
			Welkom bij NOVA
		</h1>
		<p class="mb-60 mt-4 text-xl text-gray-600 dark:text-gray-300">
			Next-Generation Optimized Virtual Assistant
		</p>
	</section>

	<!-- <div class="inline-flex gap-10"> -->
	<div class="flex flex-col gap-10 desktop:flex-row laptop:items-start">
		<a
			href="/arjen"
			class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
		>
			<img
				src="$lib/media/arjen/profielfoto.png"
				class="min-w-72 h-80"
				style="border-radius: 10px;"
				alt="Gezicht van Arjen"
			/>
			<p class="m-3 text-center font-semibold text-text-light dark:text-text-dark">
				Arjen, 16 jaar oud
			</p>
			<div
				class="max-w-80 text-justify text-text-light dark:text-text-dark"
				style="padding-top: 10px;"
			>
				Arjen is een enthousiaste tiener die houdt van technologie en creativiteit. Hij woont bij
				zijn moeder Marie en oma Helena en zit in zijn laatste jaar van de middelbare school. Naast
				zijn studies besteedt hij veel tijd aan zijn hobby’s, zoals het bouwen van drones en gamen
				met vrienden. Arjen is nieuwsgierig naar de wereld om hem heen en vindt het leuk om nieuwe
				dingen te leren, vooral als het gaat om programmeren en techniek. Hoewel hij leeft in een
				wereld vol technologie, hecht hij veel waarde aan sociale contacten en quality time met zijn
				familie.
			</div>
		</a>
		<a
			href="/marie"
			class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
		>
			<img
				src="$lib/media/marie/profielfoto.png"
				class="min-w-72 h-80"
				style="border-radius: 10px;"
				alt="Gezicht van Marie"
			/>
			<p class="m-3 text-center font-semibold text-text-light dark:text-text-dark">
				Marie, 47 jaar oud
			</p>
			<div
				class="max-w-80 text-justify text-text-light dark:text-text-dark"
				style="padding-top: 10px;"
			>
				Marie is een toegewijde moeder en creatieve professional. Ze werkt als freelance ontwerper,
				wat haar de vrijheid geeft om haar eigen tijd in te delen, maar ook de uitdaging brengt van
				het combineren van werk en gezin. Marie geniet ervan om tijd door te brengen met haar zoon
				Arjen en haar moeder Helena, die bij haar inwoont. In haar vrije tijd houdt ze van lezen,
				koken en samen met haar familie wandelen in de natuur. Marie is zorgzaam en geduldig, maar
				vindt het soms lastig om even tijd voor zichzelf te nemen in haar drukke leven.
			</div>
		</a>

		<a
			href="/helena"
			class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
		>
			<img
				src="$lib/media/helena/profielfoto.png"
				class="min-w-72 h-80"
				style="border-radius: 10px;"
				alt="Gezicht van Helena"
			/>
			<p class="m-3 text-center font-semibold text-text-light dark:text-text-dark">
				Helena, 73 jaar oud
			</p>
			<div
				class="max-w-80 text-justify text-text-light dark:text-text-dark"
				style="padding-top: 10px;"
			>
				Helena is een warme, levenslustige vrouw en de oma van Arjen. Na een actief leven vol reizen
				en vrijwilligerswerk woont ze nu bij haar dochter Marie en kleinzoon. Ze geniet ervan om
				dicht bij haar familie te zijn en waardeert de dagelijkse momenten samen, zoals gezamenlijke
				maaltijden en gesprekken over het leven. Helena houdt van tuinieren, lezen en verhalen
				vertellen over vroeger. Ze is optimistisch en staat open voor nieuwe ervaringen, ook al doet
				ze dingen graag op haar eigen tempo. Voor Helena is familie het allerbelangrijkste, en ze
				probeert een inspiratie te zijn voor zowel Marie als Arjen.
			</div>
		</a>
	</div>
</main>
