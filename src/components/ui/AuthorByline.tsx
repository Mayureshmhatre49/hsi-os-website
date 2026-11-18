import Image from 'next/image'
import Link from 'next/link'
import { Author, DEFAULT_AUTHOR } from '@/content/authors'

interface AuthorBylineProps {
  author?: Author
  publishedDate?: string
  modifiedDate?: string
  className?: string
}

export default function AuthorByline({
  author = DEFAULT_AUTHOR,
  publishedDate,
  modifiedDate,
  className = '',
}: AuthorBylineProps) {
  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl bg-ivory-100/80 border border-ivory-300/80 my-8 transition-colors ${className}`}
      itemScope
      itemType="https://schema.org/Person"
      itemProp="author"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <Link
          href={author.aboutUrl}
          className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-sandstone-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sandstone-500"
          title={`Read about ${author.name}`}
        >
          <Image
            src={author.image}
            alt={`${author.name} — ${author.role}`}
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link
              href={author.aboutUrl}
              className="font-serif text-lg sm:text-xl font-bold text-charcoal-900 hover:text-bronze-700 transition-colors"
              itemProp="name"
            >
              {author.name}
            </Link>
            <span className="text-xs font-semibold tracking-wider uppercase text-sandstone-600 bg-white px-2.5 py-0.5 rounded-full border border-sandstone-200" itemProp="jobTitle">
              {author.role}
            </span>
          </div>
          <p className="text-sm text-warmgray-600 leading-relaxed mt-2" itemProp="description">
            {author.bio}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-warmgray-500">
            <Link
              href={author.aboutUrl}
              className="text-bronze-700 font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>Full Profile on /about</span>
              <span>→</span>
            </Link>
            {author.linkedinUrl && (
              <a
                href={author.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmgray-600 hover:text-charcoal-900 inline-flex items-center gap-1 font-medium"
                itemProp="sameAs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            )}
            {publishedDate && (
              <span className="text-warmgray-400">
                Published {publishedDate}
              </span>
            )}
            {modifiedDate && (
              <span className="text-warmgray-400">
                · Updated {modifiedDate}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
