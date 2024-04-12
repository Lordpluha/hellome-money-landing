import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'

import { parallaxSpeed } from '@shared/config'

const Home = () => {
	return (
		<>
			<Parallax speed={parallaxSpeed}>
				<img
					src='Bitcoin.svg'
					alt=''
					className='absolute -z-10 left-0 top-full translate-y-1/2'
				/>
			</Parallax>
			<Parallax speed={parallaxSpeed}>
				<img
					src='Cardano Coin.svg'
					alt=''
					className='absolute -z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/4'
				/>
			</Parallax>
			<Parallax speed={parallaxSpeed}>
				<img
					src='Ethereum Coin.svg'
					alt=''
					className='absolute -z-10 right-0 top-full translate-y-1/2'
				/>
			</Parallax>
			<section className='pt-14 pb-36'>
				<p className='bg-white block text-black rounded-full py-1 px-4 text-base w-fit mx-auto font-medium'>
					Crypto Exchange
				</p>
				<h1 className='mt-14 text-4xl text-center font-thin leading-relaxed'>
					Explore the world of cryptocurrency with HelloMe
					Money&apos;s crypto exchange. Buy, sell, and trade various
					cryptocurrencies securely, all within the HelloMe Money
					platform.
				</h1>
				<svg
					width='491'
					height='44'
					viewBox='0 0 491 44'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute left-2/4 -translate-x-1/2 -z-20'
				>
					<g filter='url(#filter0_f_2619_6551)'>
						<path
							d='M11 29C177.851 2.49997 395.196 16.5 479.5 30'
							stroke='#F4F2F4'
							strokeWidth='7'
						/>
					</g>
					<defs>
						<filter
							id='filter0_f_2619_6551'
							x='0.451172'
							y='0.50238'
							width='489.603'
							height='42.9536'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood
								floodOpacity='0'
								result='BackgroundImageFix'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='5'
								result='effect1_foregroundBlur_2619_6551'
							/>
						</filter>
					</defs>
				</svg>

				<Link
					to='get-started'
					className='bg-white color-black flex w-fit rounded-2xl mx-auto text-black items-center px-4 text-xl gap-x-1 mt-16'
				>
					Get started <img src='coin-icon.png' alt='coin icon' />
				</Link>
			</section>

			<section className='grid grid-cols-2 grid-rows-2 w-full gap-y-24 gap-x-14 pb-24'>
				<article className='grid grid-cols-subgrid col-span-full row-span-1'>
					<div>
						<h2 className='text-4xl font-bold'>
							Secure Transactions:
							<img
								src='security-safe.svg'
								alt='security icon'
								className='inline-block'
							/>
						</h2>
						<p className='text-xl font-light pl-6'>
							Explore the world of cryptocurrency with confidence
							on HelloMe Money&apos;s secure platform. Buy, sell,
							and trade various cryptocurrencies knowing that your
							transactions are protected by advanced security
							measures.
						</p>
					</div>
					<div className='p-1 bg-[#d9d9d92a] rounded'>
						<img
							src='cardano-blockchain 1.jpg'
							alt=''
							className='rounded'
						/>
					</div>
				</article>
				<article className='grid grid-cols-subgrid col-span-full row-span-1'>
					<div className='p-1 bg-[#d9d9d92a] rounded'>
						<img
							src='view-hand-holding-bitcoin 1.jpg'
							alt=''
							className='rounded'
						/>
					</div>
					<div>
						<h2 className='text-4xl font-light'>
							Convenient Trading:
							<img
								src='trade.svg'
								alt='trade icon'
								className='inline-block ml-10'
							/>
						</h2>
						<p className='text-xl font-light pl-6'>
							Trade cryptocurrencies seamlessly within the HelloMe
							Money platform. Our user-friendly interface and
							intuitive tools make buying, selling, and trading
							digital assets a hassle-free experience.
						</p>
					</div>
				</article>
			</section>
		</>
	)
}

export default Home
