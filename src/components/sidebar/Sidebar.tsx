import type { Character } from '../../types/Character';
import type { Entry } from '../../types/Entry';
import type { Item } from '../../types/Item';
import type { Weapon } from '../../types/Weapon';
import { loadWeapons } from '../data/loader/weaponLoader';

import ItemPanel from './ItemPanel/ItemPanel';
import CharacterPanel from './CharacterPanel/CharacterPanel';
import WeaponPanel from './WeaponPanel/WeaponPanel';
import TomePanel from './TomePanel/TomePanel';

import './Sidebar.scss';

interface Props {
	entry: Entry | null;
}

const Sidebar = ({ entry }: Props) => {
	if (!entry) {
		return (
			<aside className="sidebar empty">
				<p>Hover or click an entry to see details</p>
			</aside>
		);
	}

	if ('type' in entry && entry.type === 'character') {
		const character = entry as Character;
		// FIXME: Don't load weapons every time...
		const weapons = loadWeapons();
		console.log(entry.id);
		const weapon = weapons.filter((w) => character.weapon === w.id);
		console.log(weapon);
		return (
			<aside className="sidebar">
				<CharacterPanel character={character} weapon={weapon[0]} />
			</aside>
		);
	}

	return (
		<aside className="sidebar">
			{'type' in entry && entry.type === 'item' && (
				<ItemPanel item={entry as Item} />
			)}
			{'type' in entry && entry.type === 'weapon' && (
				<WeaponPanel weapon={entry as Weapon} />
			)}
			{'type' in entry && entry.type === 'tome' && (
				<TomePanel tome={entry} />
			)}
		</aside>
	);
};

export default Sidebar;
