import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const CreateTweet = ({ tweetsList, setTweetsList }) => {
	const [userInput, setUserInput] = useState('');

	const userInputHandler = (event) => {
		setUserInput(event.target.value);
	};

	const userSumbitTweetHandler = (event) => {
		event.preventDefault();
		setTweetsList([...tweetsList, { content: userInput, id: uuid() }]);
		setUserInput('');
	};

	return (
		<form>
			<textarea onChange={userInputHandler} value={userInput} cols="50" rows="5" />
			<button onClick={userSumbitTweetHandler} >Submit</button>
		</form>
	);
};

export default CreateTweet;