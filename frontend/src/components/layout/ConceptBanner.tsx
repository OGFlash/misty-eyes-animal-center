import { useState } from 'react'
import { X } from 'lucide-react'

export default function ConceptBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-amber-50 border-b-2 border-amber-400 px-4 py-3 text-center shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-3">
        <span className="text-amber-600 text-lg select-none" aria-hidden="true">⚠️</span>
        <p className="text-sm font-medium text-amber-800">
          <span className="font-semibold">This is a concept / demo site.</span>{' '}
          The official Misty Eyes Animal Center website is at{' '}
          <a
            href="https://www.mistyeyes.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-amber-700 underline decoration-amber-500 underline-offset-2 hover:text-amber-900 hover:decoration-amber-700 transition-colors"
          >
            www.mistyeyes.org
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-amber-600 hover:bg-amber-100 hover:text-amber-900 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
