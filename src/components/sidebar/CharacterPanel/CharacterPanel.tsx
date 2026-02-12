import type { Character } from '../../../types/Character';
import type { Weapon } from '../../../types/Weapon';

import './CharacterPanel.scss';

interface Props {
	character: Character;
	weapon: Weapon | undefined;
}

const CharacterPanel = ({ character, weapon }: Props) => {
	return (
		<div className="character-panel">
			<h2>{character.name}</h2>
			<img
				src={`${import.meta.env.BASE_URL}${character.image}`}
				alt={character.name}
				draggable={false}
			/>
			{weapon && (
				<img
					key={weapon.name}
					src={weapon.image}
					alt={weapon.name}
					title={weapon.name}
					className="weapon-img"
					draggable={false}
				/>
			)}
			<p>{character.description}</p>
			<h3>Passive</h3>
			<p>{character.passive.description}</p>
		</div>
	);
};

export default CharacterPanel;
