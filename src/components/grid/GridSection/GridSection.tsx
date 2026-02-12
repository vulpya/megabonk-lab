import type { Entry } from '../../../types/Entry';
import GridItem from '../GridItem/GridItem';

import './GridSection.scss';

export interface Section {
	title: string;
	entries: Entry[];
}

interface Props {
	title: string;
	entries: Entry[];
	setHovered: (entry: Entry | null) => void;
	setLocked: (entry: Entry | null) => void;
}

const GridSection = ({ title, entries, setHovered, setLocked }: Props) => {
	return (
		<section className="grid-section">
			<h2>{title}</h2>
			<div className="entries">
				{entries.map((item, i) => (
					<GridItem
						key={`${item.id}${i.toString()}`}
						entry={item}
						setHovered={setHovered}
						setLocked={setLocked}
					/>
				))}
			</div>
		</section>
	);
};

export default GridSection;
