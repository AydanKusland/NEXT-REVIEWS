import './globals.css'
import NavBar from '../components/NavBar'
import { exo_2, orbitron } from './fonts'

// way of writing meta tag data in next.js
export const metadata = {
	// template way of writing different titles
	title: { default: 'Indie Gamer', template: '%s | Indie Gamer' },
	description: 'Only the best indie games, reviewed for you'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${orbitron.variable} ${exo_2.variable}`}>
			<body className='bg-orange-50 flex flex-col px-8 py-4 min-h-screen'>
				<header>
					<NavBar />
				</header>
				<main className='grow py-3'>{children}</main>
				<footer className='border-t py-3 text-center text-xs text-slate-500'>
					Game data and images courtesy of{' '}
					<a
						href='https://rawg.io/'
						target='_blank'
						className='text-orange-800 hover:underline'
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	)
}
