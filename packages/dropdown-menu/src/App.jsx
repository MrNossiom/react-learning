import 'normalize.css';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

function App() {
	return (
		<Navbar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<CogIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu />
			</NavItem>
		</Navbar>
	);
}

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);

	function calcHeight(el) {
		const height = el.offsetHeight;

		setMenuHeight(height);
	}

	function DropdownItem(props) {
		return (
			<button
				className={'menu-item'}
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className={'icon-button'}>{props.leftIcon}</span>
				{props.children}
				<span className={'icon-right'}>{props.rightIcon}</span>
			</button>
		);
	}

	return (
		<div className={'dropdown'} style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				classNames={'menu-primary'}
				onEnter={calcHeight}
			>
				<div className={'menu'}>
					<DropdownItem leftIcon={<BoltIcon />} goToMenu={'profile'}>
						Profile
					</DropdownItem>
					<DropdownItem
						leftIcon={<CogIcon />}
						goToMenu={'settings'}
						/* RightIcon={<ChevronIcon />}*/
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={500}
				classNames={'menu-settings'}
				onEnter={calcHeight}
			>
				<div className={'menu'}>
					<DropdownItem leftIcon={<ArrowIcon />} goToMenu={'main'}>
						Back
					</DropdownItem>
					<DropdownItem leftIcon={<BellIcon />}>
						Notifications
					</DropdownItem>
					<DropdownItem leftIcon={<CogIcon />}>
						More Settings...
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'profile'}
				unmountOnExit
				timeout={500}
				classNames={'menu-profile'}
				onEnter={calcHeight}
			>
				<div className={'menu'}>
					<DropdownItem leftIcon={<ArrowIcon />} goToMenu={'main'}>
						Back
					</DropdownItem>
					<DropdownItem leftIcon={<BellIcon />}>Icon</DropdownItem>
					<DropdownItem leftIcon={<BellIcon />}>
						Some button
					</DropdownItem>
					<DropdownItem leftIcon={<BellIcon />}>
						Some other button
					</DropdownItem>
					<DropdownItem leftIcon={<CogIcon />}>
						More Profile Settings...
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

function Navbar(props) {
	return (
		<nav className={'navbar'}>
			<ul className={'navbar-nav'}> {props.children} </ul>
		</nav>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className={'nav-item'}>
			<button className={'icon-button'} onClick={() => setOpen(!open)}>
				{props.icon}
			</button>

			{open && props.children}
		</li>
	);
}

export default App;
