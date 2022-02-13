import styled from 'styled-components';

const designed = {
	BasicLayout: styled.div`
		background-color: #1b1b1b;
		min-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5rem 10rem;
		color: white;
	`,

	Description: styled.div`
		flex: 1;
		padding-right: 5rem;

		h2 {
			font-weight: lighter;
		}
	`,

	ImageDiv: styled.div`
		flex: 1;
		overflow: hidden;

		img {
			width: 100%;
			height: 80vh;
			object-fit: cover;
		}
	`,

	Hide: styled.div`
		overflow: hidden;
	`,
};

export default designed;
