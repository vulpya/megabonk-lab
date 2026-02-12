import type { Entry } from '../../../types/Entry';

import './GridItem.scss';

interface Props {
	entry: Entry;
	setHovered: (entry: Entry | null) => void;
	setLocked: (entry: Entry | null) => void;
}

const GridItem = ({ entry, setHovered, setLocked }: Props) => {
	return (
		<div
			className="entry"
			onMouseEnter={() => {
				setHovered(entry);
			}}
			onMouseLeave={() => {
				setHovered(null);
			}}
			onClick={() => {
				setLocked(entry);
			}}>
			<img
				src={`${import.meta.env.BASE_URL}${entry.image}`}
				alt={entry.name}
				draggable={false}
			/>
		</div>
	);
};

export default GridItem;
