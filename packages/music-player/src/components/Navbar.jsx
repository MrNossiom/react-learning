import '../style/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setIsLibraryActive }) => (
	<div className={'navbar'}>
		<h1>Waves</h1>
		<button
			onClick={() => setIsLibraryActive((lastValue) => !lastValue)}
			className={'library-toggle'}
		>
			<FontAwesomeIcon className={'music-symbol'} icon={faMusic} />
			Library
		</button>
	</div>
);

export default Navbar;
