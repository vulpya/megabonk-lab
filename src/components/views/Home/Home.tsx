import { useMemo, useState } from 'react';

import Grid from '../../grid/Grid/Grid';

import './Home.scss';
import type { Entry } from '../../../types/Entry';
import { loadItems } from '../../data/loader/itemLoader';
import Sidebar from '../../sidebar/Sidebar';
import SearchBar from '../../search/SearchBar';

const Home = () => {
	const [hoveredEntry, setHovered] = useState<Entry | null>(null);
	const [lockedEntry, setLocked] = useState<Entry | null>(null);

  const [search, setSearch] = useState('');

	// Load data
	const items = useMemo(() => loadItems(), []);

  const filteredItems = useMemo(
		() =>
			items.filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			),
		[items, search]
  );

	return (
		<div id="megabonk-lab">
			<Sidebar entry={hoveredEntry ?? lockedEntry} />
			<main>
				<SearchBar search={search} setSearch={setSearch} />
				<Grid
					sections={[{ title: 'Items', entries: filteredItems }]}
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
