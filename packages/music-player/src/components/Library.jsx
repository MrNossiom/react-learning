/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import LibrarySong from './LibrarySong';

import '../style/Library.scss';

const Library = ({ audioRef, isPlaying, isLibraryActive,
	songs, setSongs,
	currentSong, setCurrentSong }) => {
	useEffect(() => {
		setSongs(songs.map((element, index) => {
			if (index === songs.findIndex(({ id }) => id === currentSong.id)) {
				return {
					...element,
					active: true,
				};
			}

			return {
				...element,
				active: false,
			};
		}));
	}, [currentSong.id]);

	return (
		<div className={`library-overlay${isLibraryActive ? ' active' : ''}`}>
			<h2>Library</h2>
			<div className="library-songs">
				{
					songs && songs.map((song) => <LibrarySong songs={songs} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying} song={song} setCurrentSong={setCurrentSong} key={song.id} />)
				}
			</div>
		</div>
	);
};

export default Library;