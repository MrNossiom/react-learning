import './style/App.scss';
import { useRef, useState } from 'react';
import ActiveSongDisplay from './components/ActiveSongDisplay';
import Library from './components/Library';
import Navbar from './components/Navbar';
import Player from './components/Player';
import SongsDataList from './SongsData';

const App = () => {
	const [isLibraryActive, setIsLibraryActive] = useState(false);
	const [songs, setSongs] = useState(SongsDataList);
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);

	return (
		<>
			<Library
				audioRef={audioRef}
				isLibraryActive={isLibraryActive}
				isPlaying={isPlaying}
				songs={songs}
				setSongs={setSongs}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
			/>
			<div
				className={`static-content${
					isLibraryActive ? ' library-active' : ''
				}`}
			>
				<Navbar setIsLibraryActive={setIsLibraryActive} />
				<ActiveSongDisplay currentSong={currentSong} />
				<Player
					audioRef={audioRef}
					currentSong={currentSong}
					setCurrentSong={setCurrentSong}
					songs={songs}
					setSongs={setSongs}
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
				/>
			</div>
		</>
	);
};

export default App;
