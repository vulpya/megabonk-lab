import './SearchBar.scss';

interface Props {
	search: string;
	setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: Props) => {
	return (
		<div className="search-bar-container">
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search items, weapons, tomes or characters."
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
