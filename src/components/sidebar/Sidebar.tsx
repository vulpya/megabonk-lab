import type { Entry } from '../../types/Entry';
import type { Item } from '../../types/Item';

import ItemPanel from './ItemPanel/ItemPanel';

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

    return (
		<aside className="sidebar">
			{'type' in entry && entry.type === 'item' && (
                <ItemPanel item={entry as Item} />
			)}
		</aside>
	);
};

export default Sidebar;
