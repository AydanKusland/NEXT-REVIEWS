'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ children, href, prefetch }) {
	const pathname = usePathname()
	if (pathname !== href)
		return (
			<Link
				href={href}
				className='text-orange-800 hover:underline'
				prefetch={prefetch}
			>
				{children}
			</Link>
		)
	return <span className='text-orange-800'>{children}</span>
}
