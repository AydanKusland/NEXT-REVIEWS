import Heading from '@/components/Heading'
import ShareLinkButton from '@/components/ShareLinkButton'
import { getReview, getSlugs } from '@/lib/reviews'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// This function tells Next.js which routes to generate statically, within this slug
export async function generateStaticParams() {
	const slugs = await getSlugs()
	return slugs.map(slug => ({ slug }))
}

// dynamic way of generating metadata (title)
export async function generateMetadata({ params: { slug } }) {
	const review = await getReview(slug)
	if (!review) {
		notFound()
	}
	return {
		title: review.title
	}
}

export default async function ReviewPage({ params: { slug } }) {
	const review = await getReview(slug)
	if (!review) {
		notFound()
	}
	const { title, date, subtitle, image, body } = review
	console.log('[ReviewPage] slug:', title)
	return (
		<>
			<Heading>{title}</Heading>
			<p className='font-semibold pb-3'>{subtitle}</p>
			<div className='flex gap-3 items-baseline'>
				<p className='italic pb-2'>{date}</p>
				<ShareLinkButton />
			</div>
			<Image
				src={image}
				alt=''
				priority
				width='640'
				height='360'
				className='rounded mb-2'
			/>
			<article
				dangerouslySetInnerHTML={{ __html: body }}
				className='prose prose-slate max-w-screen-sm'
			/>
		</>
	)
}
