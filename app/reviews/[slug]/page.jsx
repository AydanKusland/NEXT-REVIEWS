import Heading from '@/components/Heading'
import { getReview, getSlugs } from '@/lib/reviews'

export async function generateStaticParams() {
	const slugs = await getSlugs()
	return slugs.map(slug => ({ slug }))
}

export default async function ReviewPage({ params: { slug } }) {
	const { title, date, image, body } = await getReview(slug)
	return (
		<>
			<Heading>{title}</Heading>
			<p className='italic pb-2'>{date}</p>
			<img
				src={image}
				alt=''
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
