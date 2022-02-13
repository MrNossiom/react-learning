import designed from '../DesignedComponents';

import Home1 from '../img/home1.png';
import { ReactComponent as Wave } from '../img/svg/wave.svg';

const AboutSection = () => (
	<designed.BasicLayout>
		<designed.Description>
			<div className={'title'}>
				<designed.Hide>
					<h2>We work to make</h2>
				</designed.Hide>
				<designed.Hide>
					<h2>
						your <span>dreams</span> come
					</h2>
				</designed.Hide>
				<designed.Hide>
					<h2>true.</h2>
				</designed.Hide>
			</div>
			<p>
				Contact us for any photography or ideas you have. We have
				professional with some skills
			</p>
			<button>Contact Us</button>
		</designed.Description>
		<designed.ImageDiv>
			<img src={Home1} alt={'A guy with a camera'} />
		</designed.ImageDiv>
	</designed.BasicLayout>
);

export default AboutSection;
