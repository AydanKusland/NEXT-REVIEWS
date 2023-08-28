import Heading from '../../components/Heading'

// way of writing meta tag data in next.js
export const metadata = {
	title: 'About'
}

export default function AboutPage() {
	return (
		<>
			<Heading>About Site</Heading>
			<p>Here we'll write some site info</p>
		</>
	)
}
