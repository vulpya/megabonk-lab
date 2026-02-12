import { useMemo, useState } from 'react';

import Grid from '../../grid/Grid/Grid';

import './Home.scss';
import type { Entry } from '../../../types/Entry';
import { loadItems } from '../../data/loader/itemLoader';
import Sidebar from '../../sidebar/Sidebar';
import SearchBar from '../../search/SearchBar';
import { loadCharacters } from '../../data/loader/characterLoader';
import { loadWeapons } from '../../data/loader/weaponLoader';
import { loadTomes } from '../../data/loader/tomeLoader';

const Home = () => {
	const [hoveredEntry, setHovered] = useState<Entry | null>(null);
	const [lockedEntry, setLocked] = useState<Entry | null>(null);

	const [search, setSearch] = useState('');

	// Load data
	const items = useMemo(() => loadItems(), []);
	const characters = useMemo(() => loadCharacters(), []);
	const weapons = useMemo(() => loadWeapons(), []);
	const tomes = useMemo(() => loadTomes(), []);

	const filteredItems = useMemo(
		() =>
			items.filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			),
		[items, search]
	);

	const filteredCharacters = useMemo(
		() =>
			characters.filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			),
		[characters, search]
	);

	const filteredWeapons = useMemo(
		() =>
			weapons.filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			),
		[weapons, search]
	);

	const filteredTomes = useMemo(
		() =>
			tomes.filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			),
		[tomes, search]
	);

	return (
		<div id="megabonk-lab">
			<Sidebar entry={hoveredEntry ?? lockedEntry} />
			<main>
				<SearchBar search={search} setSearch={setSearch} />
				<Grid
					sections={[
						{ title: 'Items', entries: filteredItems },
						{ title: 'Weapons', entries: filteredWeapons },
						{ title: 'Tomes', entries: filteredTomes },
						{ title: 'Characters', entries: filteredCharacters }
					]}
					hoveredEntry={hoveredEntry}
					setHovered={setHovered}
					setLocked={setLocked}
					search={search}
				/>
			</main>
		</div>
	);
};

export default Home;
