import type { Entry } from '../../../types/Entry';
import type { Section } from '../GridSection/GridSection';
import GridSection from '../GridSection/GridSection';

interface Props {
	sections: Section[];
	hoveredEntry: Entry | null;
	setHovered: (entry: Entry | null) => void;
	setLocked: (entry: Entry | null) => void;
	search: string;
}

const Grid = ({ sections, setHovered, setLocked }: Props) => {
	return (
		<div className="grid-container">
			{sections.map((section) => (
				<GridSection
					key={section.title}
					title={section.title}
					entries={section.entries}
					setHovered={setHovered}
                    setLocked={setLocked}
				/>
			))}
		</div>
	);
};

export default Grid;
