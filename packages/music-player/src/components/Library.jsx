import '../style/Library.scss';
import LibrarySong from './LibrarySong';
import { useEffect } from 'react';

const Library = ({
	audioRef,
	currentSong,
	isLibraryActive,
	isPlaying,
	setCurrentSong,
	setSongs,
	songs,
}) => {
	useEffect(() => {
		setSongs(
			songs.map((element, index) => {
				if (
					index === songs.findIndex(({ id }) => id === currentSong.id)
				) {
					return {
						...element,
						active: true,
					};
				}

				return {
					...element,
					active: false,
				};
			})
		);
	}, [currentSong.id]);

	return (
		<div className={`library-overlay${isLibraryActive ? ' active' : ''}`}>
			<h2>Library</h2>
			<div className={'library-songs'}>
				{songs &&
					songs.map((song) => (
						<LibrarySong
							songs={songs}
							setSongs={setSongs}
							audioRef={audioRef}
							isPlaying={isPlaying}
							song={song}
							setCurrentSong={setCurrentSong}
							key={song.id}
						/>
					))}
			</div>
		</div>
	);
};

export default Library;
