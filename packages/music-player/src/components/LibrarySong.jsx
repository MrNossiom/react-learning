import '../style/LibrarySong.scss';

const LibrarySong = ({ audioRef, isPlaying, setCurrentSong, song }) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song);
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div role={'button'} tabIndex={0} onClick={songSelectHandler} className={`library-song${song.active ? ' selected' : ''}`} >
			<img className={'song-cover'} src={song.cover} alt={song.title} />
			<div className={'song-infos'}>
				<h4 className={'song-title'}>{song.title}</h4>
				<h5 className={'song-artist'}>{song.artist}</h5>
			</div>
		</div>
	);
};

export default LibrarySong;
