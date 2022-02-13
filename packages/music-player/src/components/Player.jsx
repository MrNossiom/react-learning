import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { Range, getTrackBackground } from 'react-range';

import '../style/Player.scss';

const Player = ({ audioRef,
	currentSong, setCurrentSong,
	isPlaying, setIsPlaying,
	songs }) => {
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	const playSongHandler = () => {
		setIsPlaying((lastValue) => !lastValue);
		if (!isPlaying) audioRef.current.play();
		else if (isPlaying) audioRef.current.pause();
	};

	const timeUpdateHandler = ({ target }) => {
		setSongInfo({
			...songInfo,
			currentTime: target.currentTime,
			duration: target.duration,
		});
	};

	const timeDragHandler = (values) => {
		audioRef.current.currentTime = values[0].toFixed(1);
		setSongInfo({
			...songInfo,
			currentTime: values[0],
		});
	};

	const skipTrackHandler = async (direction) => {
		if (direction === 'backward' && songInfo.currentTime > 2) {
			audioRef.current.currentTime = 0;
			setSongInfo({
				...songInfo,
				currentTime: 0,
			});
		} else if (direction === 'forward' || direction === 'backward') {
			let nextSongIndex;

			if (direction === 'forward') nextSongIndex = (songs.findIndex(({ id }) => id === currentSong.id) + 1) % songs.length;
			else if (direction === 'backward') nextSongIndex = (songs.findIndex(({ id }) => id === currentSong.id) - 1) % songs.length;
			if (nextSongIndex === -1) nextSongIndex = songs.length - 1;
			await setCurrentSong(songs[nextSongIndex]);
			if (isPlaying) audioRef.current.play();
		}
	};

	const getTime = (time) => {
		if (!time) return '0:00';

		return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
	};

	return (
		<div className="player-wrapper">
			<div className="time-control">
				<span>{getTime(songInfo.currentTime)}</span>
				<Range
					min={0}
					max={songInfo.duration || 1}
					values={[songInfo.currentTime]}
					onChange={timeDragHandler}
					renderTrack={(props) => <Track colors={currentSong.colors} max={songInfo.duration || 1} values={[songInfo.currentTime]} {...props} />}
					renderThumb={(props) => <Thumb color={currentSong.colors[0]} {...props} />}
					style={{
						height: '100%',
						width: '100%',
						overflow: 'hidden',
					}}
				/>
				<span>{getTime(songInfo.duration)}</span>
			</div>
			<div className="play-controls">
				<FontAwesomeIcon onClick={() => skipTrackHandler('backward')} className="skip-back" size="2x" icon={faAngleLeft} />
				<FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
				<FontAwesomeIcon onClick={() => skipTrackHandler('forward')} className="skip-forward" size="2x" icon={faAngleRight} />
			</div>
			<audio onTimeUpdate={timeUpdateHandler}
				onEnded={() => skipTrackHandler('forward')}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				type="audio/mpeg"
			/>
		</div>
	);
};

const Track = ({ props, children, values, max, colors }) => (
	<div
		onMouseDown={props.onMouseDown}
		onTouchStart={props.onTouchStart}
		style={{
			...props.style,
			height: '36px',
			display: 'flex',
			width: '100%',
		}}
	>
		<div
			ref={props.ref}
			style={{
				height: '6px',
				width: '100%',
				borderRadius: '4px',
				background: getTrackBackground({
					colors: [colors[0], '#CCC'],
					values,
					min: 0,
					max,
				}),
				alignSelf: 'center',
			}}
		>
			{children}
		</div>
	</div >
);

const Thumb = ({ props, isDragged, color }) => (
	<div
		{...props}
		style={{
			...props.style,
			height: '25px',
			width: '25px',
			borderRadius: '50px',
			backgroundColor: 'white',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			boxShadow: '0px 2px 6px #AAA',
		}}
	>
		<div style={{
			height: '10px',
			width: '10px',
			borderRadius: '50px',
			backgroundColor: isDragged ? color : 'grey',
		}} />
	</div>
);

export default Player;