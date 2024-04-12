import { NavLink } from 'react-router-dom'

import { LoginBtn, SignUpBtn } from '@features/Auth'

import logo from '/logo.svg'

const Header = () => {
	return (
		<header className='sticky flex w-full px-16 py-3 justify-center flex-row items-center'>
			<NavLink to={'/'} className='mr-auto'>
				<img src={logo} alt='logo' />
			</NavLink>
			<nav>
				<ul className='flex gap-x-12'>
					<li>
						<NavLink
							to='personal-account'
							className={({ isActive }) =>
								isActive
									? 'bg-[#444444] p-2 rounded-md'
									: 'p-2 rounded-md bg-transparent'
							}
						>
							Personal Account
						</NavLink>
					</li>
					<li>
						<NavLink
							to='business-account'
							className={({ isActive }) =>
								isActive
									? 'bg-[#444444] p-2 rounded-md'
									: 'p-2 rounded-md bg-transparent'
							}
						>
							Business Account
						</NavLink>
					</li>
					<li>
						<NavLink
							to='company'
							className={({ isActive }) =>
								isActive
									? 'bg-[#444444] p-2 rounded-md'
									: 'p-2 rounded-md bg-transparent'
							}
						>
							Company
						</NavLink>
					</li>
				</ul>
			</nav>
			<ul className='ml-auto flex flex-row gap-x-4'>
				<LoginBtn />
				<SignUpBtn />
			</ul>
		</header>
	)
}

export default Header
