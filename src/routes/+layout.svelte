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
	// import { page } from '$app/stores';

	// $: activeUrl = $page;
	// let activeClass =
	// 'text-green-500 dark:text-green-300 hover:text-green-700 dark:hover:text-green-500';
	// 	String.prototype.toProperCase = function () {
	//     return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	// };

	// const appName = "NOVA";
	// $: pageName = $page.url.pathname.split("/").slice(1)
	// $: title = [appName, ...pageName].filter(Boolean).join(" - ")

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

	const bewoners = [
		{ name: 'Arjen', href: '/' + 'arjen', help: 'Zoon, 16', logo: 'gen3.jpeg' },
		{ name: 'Marie', href: '/' + 'marie', help: 'Moeder, 47', logo: 'gen2.jpeg' },
		{ name: 'Helena', href: '/' + 'helena', help: 'Grootmoeder, 73', logo: 'gen1.jpeg' }
	];
</script>

<!-- <Navbar class="fixed bg-transparent dark:bg-transparent" {activeUrl} {activeClass}> -->
<!-- <Navbar class="p-0 fixed shadow-2xl shadow-background-light dark:shadow-background-dark bg-background-light dark:bg-background-dark"> -->
<Navbar class="fixed bg-background-light p-0 dark:bg-background-dark">
	<NavHamburger />
	<NavUl>
		<NavLi href="/" class="select-none">Home</NavLi>
		<NavLi class="cursor-pointer select-none">
			Over NOVA<ChevronDownOutline
				class="ms-1 inline h-6 w-6 text-text-light dark:text-text-dark"
			/>
		</NavLi>
		<Dropdown class="w-46 z-20">
			<DropdownItem href="/nova#watisnova">Wat is NOVA?</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/nova#hoewerktnova">Hoe werkt NOVA?</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/nova#isnovavooriedereen">Is NOVA voor iedereen?</DropdownItem>
		</Dropdown>
		<NavLi class="cursor-pointer select-none"
			>Het gezin <ChevronDownOutline
				class="ms-1 inline h-6 w-6 text-text-light dark:text-text-dark"
			/></NavLi
		>
		<MegaMenu
			ulClass="grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max"
			items={bewoners}
			let:item
			class="bg-background-light shadow-xl dark:bg-background-dark dark:shadow-lg dark:shadow-gray-800"
		>
			<a
				href={item.href}
				class="block h-full rounded-lg bg-background-light p-3 hover:bg-gray-200 dark:bg-background-dark dark:hover:bg-gray-800"
			>
				<img
					src={item.logo}
					class="mr-3 h-40"
					style="border-radius: 10px;"
					alt="Gezicht van {item.name}"
				/>
				<div
					class="font-semibold text-text-light dark:text-text-dark"
					style="padding-top: 10px; text-align: center;"
				>
					{item.name}
				</div>
				<!-- <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span> -->
			</a>
		</MegaMenu>
		<NavLi class="cursor-pointer select-none">
			Impact en Context<ChevronDownOutline
				class="ms-1 inline h-6 w-6 text-text-light dark:text-text-dark"
			/>
		</NavLi>
		<Dropdown class="z-20 w-56">
			<DropdownItem href="/impact#psychologischeaspecten">Psychologische aspecten</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/impact#maatschappelijkecontext">Maatschappelijke context</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/impact#maatschappelijkeimpactopgezinnen"
				>Maatschappelijke impact op gezinnen</DropdownItem
			>
		</Dropdown>
		<NavLi class="cursor-pointer select-none">
			Innovatie en Kritiek<ChevronDownOutline
				class="ms-1 inline h-6 w-6 text-text-light dark:text-text-dark"
			/>
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
		<NavLi class="cursor-pointer select-none">
			Vakgebied<ChevronDownOutline
				class="ms-1 inline h-6 w-6 text-text-light dark:text-text-dark"
			/>
		</NavLi>
		<Dropdown class="z-20 w-56">
			<DropdownItem href="/vakgebied/recht">Recht</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/vakgebied/tp">Toegepaste Psychologie</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/vakgebied/cs">Cyber Security</DropdownItem>
		</Dropdown>
		<NavLi href="/bronnen" class="select-none">Literatuurlijst</NavLi>
	</NavUl>
	<DarkMode {btnClass} />
</Navbar>

<slot />

<style></style>
