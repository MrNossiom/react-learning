import styled from 'styled-components';
import designed from '../DesignedComponents';

import { ReactComponent as ClockIcon } from '../img/svg/clock.svg';
import { ReactComponent as TeamworkIcon } from '../img/svg/teamwork.svg';
import { ReactComponent as DiaphragmIcon } from '../img/svg/diaphragm.svg';
import { ReactComponent as MoneyIcon } from '../img/svg/money.svg';

import Home2 from '../img/home2.png';

const ServicesSection = () => (
	<designed.Services>
		<div className={'description'}>
			<h2>
				High <span>quality</span> services
			</h2>
			<designed.Cards>
				<designed.Card>
					<div className={'icon'}>
						<ClockIcon />
						<h3>Efficient</h3>
					</div>
					<p>Lorem ipsum dolor sit amen.</p>
				</designed.Card>
				<designed.Card>
					<div className={'icon'}>
						<TeamworkIcon />
						<h3>Teamwork</h3>
					</div>
					<p>Lorem ipsum dolor sit amen.</p>
				</designed.Card>
				<designed.Card>
					<div className={'icon'}>
						<DiaphragmIcon />
						<h3>Diaphragm</h3>
					</div>
					<p>Lorem ipsum dolor sit amen.</p>
				</designed.Card>
				<designed.Card>
					<div className={'icon'}>
						<MoneyIcon />
						<h3>Affordable</h3>
					</div>
					<p>Lorem ipsum dolor sit amen.</p>
				</designed.Card>
			</designed.Cards>
		</div>
		<div className={'image'}>
			<img src={Home2} alt={'A movie camera'} />
		</div>
	</designed.Services>
);

designed.Services = styled(designed.BasicLayout)`
	h2 {
		padding-bottom: 5rem;
	}

	p {
		width: 70%;
		padding: 2rem 0 4rem 0;
	}
`;

designed.Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

designed.Card = styled.div`
	flex-basis: 20rem;

	.icon {
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}
`;

export default ServicesSection;
