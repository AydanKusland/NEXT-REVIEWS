import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

// Reading reviews directory to get list of all reviews available and their names
// we use node FS module for this
export async function getSlugs() {
	const files = await readdir('./content/reviews')
	return files
		.filter(file => file.endsWith('.md'))
		.map(file => file.slice(0, -'.md'.length))
}

// Iterate over file names, compose reviews with "getReview" function, make an array from them and sort it by date
export async function getReviews() {
	const slugs = await getSlugs()
	const reviews = []
	for (const slug of slugs) {
		const review = await getReview(slug)
		reviews.push(review)
	}
	reviews.sort((a, b) => {
		a.date > b.date
	})
	return reviews
}

// read review file with Node FS module, parse it with gray-matter library (makes object from YAML code in markdown document), then convert main file content to HTML code.
export async function getReview(slug) {
	const text = await readFile(`./content/reviews/${slug}.md`, 'utf8')
	const {
		content,
		data: { title, date, image }
	} = matter(text)
	const body = marked(content)
	return { slug, title, date, image, body }
}

// Just get first review from reviews array
export async function getFeaturedReview() {
	const reviews = await getReviews()
	return reviews[0]
}
