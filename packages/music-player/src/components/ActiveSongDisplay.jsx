import '../style/ActiveSongDisplay.scss';

const ActiveSongDisplay = ({ currentSong }) => (

	<div className="active-song-wrapper">
		<img className="song-cover" src={currentSong.cover} alt={currentSong.title} />
		<h1 className="song-title">{currentSong.title}</h1>
		<h2 className="song-artist">{currentSong.artist}</h2>
	</div>

);

export default ActiveSongDisplay;