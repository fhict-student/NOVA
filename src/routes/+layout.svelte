<script>
	import '../app.css';
	import {
		DarkMode,
		Navbar,
		NavLi,
		NavUl,
		NavHamburger,
		MegaMenu,
		Dropdown,
		DropdownDivider,
		DropdownItem
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	import ArjenAvif from '$lib/media/arjen/profielfoto.avif';
	import ArjenWebp from '$lib/media/arjen/profielfoto.webp';
	import ArjenPng from '$lib/media/arjen/profielfoto.png';

	import MarieAvif from '$lib/media/marie/profielfoto.avif';
	import MarieWebp from '$lib/media/marie/profielfoto.webp';
	import MariePng from '$lib/media/marie/profielfoto.png';

	import HelenaAvif from '$lib/media/helena/profielfoto.avif';
	import HelenaWebp from '$lib/media/helena/profielfoto.webp';
	import HelenaPng from '$lib/media/helena/profielfoto.png';

	const btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

	const chevronClass = 'ms-1 inline h-6 w-6 text-text-light dark:text-text-dark';

	const backClass = 'bg-background-light dark:bg-background-dark';

	const bewoners = [
		{ naam: 'Arjen', info: 'Zoon, 16', png: ArjenPng, webp: ArjenWebp, avif: ArjenAvif },
		{ naam: 'Marie', info: 'Moeder, 47', png: MariePng, webp: MarieWebp, avif: MarieAvif },
		{ naam: 'Helena', info: 'Grootmoeder, 73', png: HelenaPng, webp: HelenaWebp, avif: HelenaAvif }
	];
</script>

<Navbar fluid="false" class="fixed {backClass} select-none p-0">
	<NavHamburger />
	<NavUl>
		<NavLi href="/" class="flex gap-2"
			><enhanced:img src="$lib/media/favicon.png?w=20" alt="logo" class="min-w-5" />Home</NavLi
		>

		<!-- OVER NOVA -->
		<NavLi class="cursor-pointer">
			Over NOVA<ChevronDownOutline class={chevronClass} />
		</NavLi>
		<Dropdown class="w-46 z-20">
			<DropdownItem href="/nova#watisnova">Wat is NOVA?</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/nova#hoewerktnova">Hoe werkt NOVA?</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/nova#isnovavooriedereen">Is NOVA voor iedereen?</DropdownItem>
		</Dropdown>

		<!-- HET GEZIN -->
		<NavLi class="cursor-pointer">Het gezin<ChevronDownOutline class={chevronClass} /></NavLi>
		<MegaMenu
			ulClass="grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max"
			items={bewoners}
			let:item
			class="shadow-xl dark:shadow-lg dark:shadow-gray-800" 
		> <!-- {backClass} -->
			<div class="block h-full rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-gray-800 ">
				<a href={item.naam.toLowerCase()}>
					<picture>
						<source srcset={item.avif} alt="{item.naam}'s foto" type="image/avif" />
						<source srcset={item.webp} alt="{item.naam}'s foto" type="image/webp" />
						<img
							src={item.png}
							alt="{item.naam}'s foto"
							style="border-radius: 10px;"
							class="h-40"
						/>
					</picture>
					<p
						class="font-semibold text-text-light dark:text-text-dark"
						style="padding-top: 10px; text-align: center;"
					>
						{item.naam} ({item.info})
					</p>
					<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span> -->
				</a>
			</div>
		</MegaMenu>

		<!-- IMPACT EN CONTEXT -->
		<NavLi class="cursor-pointer">
			Impact en Context<ChevronDownOutline class={chevronClass} />
		</NavLi>
		<Dropdown class="z-20 w-56">
			<DropdownItem href="/impact#psychologischeaspecten">Psychologische effecten</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/impact#onafhankelijkheid"
				>Onafhankelijkheid en gevolgen van afhankelijkheid</DropdownItem
			>
			<DropdownDivider />
			<DropdownItem href="/impact#maatschappelijkecontext">Maatschappelijke context</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/impact#maatschappelijkeimpactopgezinnen"
				>Maatschappelijke impact op gezinnen</DropdownItem
			>
		</Dropdown>

		<!-- INNOVATIE EN KRITIEK -->
		<NavLi class="cursor-pointer">
			Innovatie en Kritiek<ChevronDownOutline class={chevronClass} />
		</NavLi>
		<Dropdown class="z-20 w-56">
			<DropdownItem href="/innovatie#specifiekemodellenentheorieën"
				>Specifieke modellen en theorieën</DropdownItem
			>
			<DropdownDivider />
			<DropdownItem href="/innovatie#verantwoordgebruikvanslimmetechnologie"
				>Verantwoord gebruik van slimme technologie</DropdownItem
			>
		</Dropdown>

		<!-- VAKGEBIED -->
		<NavLi class="cursor-pointer select-none">
			Vakgebied<ChevronDownOutline class={chevronClass} />
		</NavLi>
		<Dropdown class="z-20 w-56">
			<DropdownItem href="/cs">Cyber Security</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/recht">Recht</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/tp">Toegepaste Psychologie</DropdownItem>
		</Dropdown>

		<!-- LITERATUURLIJST -->
		<NavLi href="/literatuurlijst">Literatuurlijst</NavLi>
	</NavUl>
	<DarkMode {btnClass} />
</Navbar>

<slot />
