'use client'

export function AdminFooter() {
  return (
    <footer className="bg-white shadow">
      <div className="mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cyperus Enterprise. All rights reserved.
          </p>
        </div>
        <div className="mt-2 flex justify-center space-x-6 md:mt-0">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  )
} 