import Heading from '../../components/Heading'

// way of writing meta tag data in next.js
export const metadata = {
	title: 'About'
}

export default function AboutPage() {
	console.log('[AboutPage] rendered')

	return (
		<>
			<Heading>About Site</Heading>
			<p>Here we &rsquo; ll write some site info</p>
		</>
	)
}
