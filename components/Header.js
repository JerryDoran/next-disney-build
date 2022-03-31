import Image from 'next/image'
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function Header() {
  const [session, loading] = useSession()
  const router = useRouter()

  return (
    <div className="sticky top-0 z-[1000] flex h-[72px] items-center bg-[#040714] px-10 md:px-12">
      <Image
        src="/assets/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="ml-10 hidden items-center space-x-6 lg:flex">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/assets/images/movie-icon.svg" className="h-5" />
            <span className="span">movies</span>
          </a>
          <a className="header-link group">
            <img src="/assets/images/series-icon.svg" className="h-5" />
            <span className="span">series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto rounded border px-4 py-1.5 font-medium uppercase tracking-wide transition duration-200 hover:bg-white hover:text-black"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <>
          <img
            src={session.user.image}
            alt="user"
            className="ml-auto h-12 w-12 cursor-pointer rounded-full object-cover"
            onClick={signOut}
          />
        </>
      )}
    </div>
  )
}

export default Header
