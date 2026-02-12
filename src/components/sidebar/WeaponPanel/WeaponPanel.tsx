import type { Weapon } from '../../../types/Weapon';
import { kebabToTitleCase } from '../../../util/util';

import './WeaponPanel.scss';

interface Props {
	weapon: Weapon;
}

const WeaponPanel = ({ weapon }: Props) => {
	return (
		<div className="weapon-panel">
			<h2>{weapon.name}</h2>
			<img
				src={`${import.meta.env.BASE_URL}${weapon.image}`}
				alt={weapon.name}
				draggable={false}
			/>
			<p>{weapon.description}</p>
			<h3>Type</h3>
			<ul className="weapon-types-container">
				{weapon.weaponType.map((type) => {
					return <li>{kebabToTitleCase(type)}</li>;
				})}
			</ul>
			<h3>Scales with</h3>
			<ul className="weapon-types-container">
				{weapon.scaling.map((scaling) => {
					return <li>{kebabToTitleCase(scaling)}</li>;
				})}
			</ul>
			{weapon.specialEffect && (
				<>
					<h3>Special Effect</h3>
					<ul>
						<li>{kebabToTitleCase(weapon.specialEffect)}</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default WeaponPanel;
