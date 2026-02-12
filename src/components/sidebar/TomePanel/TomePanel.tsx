import type { Tome } from '../../../types/Tome';

import './TomePanel.scss';

interface Props {
	tome: Tome;
}

const TomePanel = ({ tome }: Props) => {
	return (
		<div className="item-panel">
			<h2>{tome.name}</h2>
			<img
				src={`${import.meta.env.BASE_URL}${tome.image}`}
				alt={tome.name}
				draggable={false}
			/>
			<p>{tome.description}</p>
		</div>
	);
};

export default TomePanel;
