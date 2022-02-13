import { useState, useEffect } from 'react';
import TweetsList from './components/TweetsList';
import CreateTweet from './components/CreateTweet';

function App() {
	const [tweetsList, setTweetsList] = useState([]);

	useEffect(() => {
		console.log('Yey');
	}, [tweetsList]);

	return (
		<>
			<TweetsList tweetsList={tweetsList} setTweetsList={setTweetsList}/>
			<hr />
			<CreateTweet tweetsList={tweetsList} setTweetsList={setTweetsList} />
		</>
	);
}

export default App;