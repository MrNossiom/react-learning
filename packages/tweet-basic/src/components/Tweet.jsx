const Tweet = ({ tweet, tweetsList, setTweetsList }) => {
	const deleteTweet = () => {
		setTweetsList(tweetsList.filter((el) => el.id !== tweet.id));
	};

	return (
		<div className="tweet">
			<hr />
			<p>{tweet.content}</p>
			<button onClick={deleteTweet}>Delete</button>
			<button>Like</button>
		</div>
	);
};

export default Tweet;