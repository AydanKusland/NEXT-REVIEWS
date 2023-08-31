import Link from 'next/link'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function PaginationBar({ href, page, pageCount }) {
	return (
		<div className='flex gap-2 items-center'>
			<PaginationLink href={`${href}?page=${page - 1}`} disabled={page === 1}>
				<ChevronLeftIcon className='h-5 w-5' />
				<span className='sr-only'>Previous Page</span>
			</PaginationLink>
			<span>
				Page {page} of {pageCount}
			</span>
			<PaginationLink
				href={`${href}?page=${page + 1}`}
				disabled={page === pageCount}
			>
				<ChevronRightIcon className='h-5 w-5' />
				<span className='sr-only'>Next Page</span>
			</PaginationLink>
		</div>
	)
}

function PaginationLink({ children, disabled, href }) {
	return (
		<Link
			href={href}
			className={`${
				disabled && 'invisible'
			} border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700`}
		>
			{children}
		</Link>
	)
}
