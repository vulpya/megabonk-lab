import type { Item } from '../../../types/Item';

import './ItemPanel.scss';

interface Props {
	item: Item;
}

const ItemPanel = ({ item }: Props) => {
	return (
		<div className="item-panel">
            <h2>{item.name}</h2>
			<img
				src={`${import.meta.env.BASE_URL}${item.image}`}
				alt={item.name}
                draggable={false}
			/>
			<span className={`rarity rarity-${item.rarity}`}>
				{item.rarity.toUpperCase()}
			</span>
			<p>{item.description}</p>
		</div>
	);
};

export default ItemPanel;
