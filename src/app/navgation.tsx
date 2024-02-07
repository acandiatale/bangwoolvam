'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TopNavigation = {
  label: string
  path: string
}

export default function Navigation() {
  const pathname = usePathname()

  const tabs: TopNavigation[] = [
    {
      label: 'Main',
      path: '/',
    },
    {
      label: 'Sample',
      path: '/sample',
    },
    {
      label: 'Path1',
      path: '/path1',
    },
    {
      label: 'Path2',
      path: '/path2',
    },
  ]

  const defaultListClass = 'inline-block p-4 border-b-2 rounded-t-lg'

  const activeClass =
    'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'

  const noneClass =
    'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          {tabs.map((tab) => {
            return (
              <Link
                key={`${tab.label}-index`}
                href={tab.path}
                className={`${defaultListClass} ${tab.path === pathname ? activeClass : noneClass}`}
              >
                {tab.label}
              </Link>
            )
          })}
        </li>
      </ul>
    </div>
  )
}
