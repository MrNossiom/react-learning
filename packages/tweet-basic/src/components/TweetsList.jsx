import Tweet from './Tweet';

const TweetsList = ({ tweetsList, setTweetsList }) => (
	<div className="tweets-list">
		{tweetsList.map((tweet) => <Tweet tweet={tweet} tweetsList={tweetsList} setTweetsList={setTweetsList} key={tweet.id} />)}
	</div>
);

export default TweetsList;