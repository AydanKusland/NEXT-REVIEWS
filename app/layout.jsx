import './globals.css'
import NavBar from '../components/NavBar'
import { exo_2, orbitron } from './fonts'

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${orbitron.variable} ${exo_2.variable}`}>
			<body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
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
