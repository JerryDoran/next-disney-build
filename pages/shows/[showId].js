import { PlusIcon, XIcon } from '@heroicons/react/solid';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

function Show({ result }) {
  // console.log(result);
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const [session] = useSession();
  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  const index = result.videos?.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-y-28 inset-x-4 z-50 space-y-6 md:inset-y-auto md:inset-x-12 md:bottom-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {result.title || result.original_title}
            </h1>
            <div className="flex items-center space-x-5 md:space-x-7">
              <button className="flex items-center justify-center rounded bg-[#f9f9f9] py-2 px-8 text-xs text-black transition-all hover:bg-[#c6c6c6] md:px-12 md:py-2.5 md:text-base">
                <img
                  src="/assets/images/play-icon-black.svg"
                  alt=""
                  className="h-6"
                />
                <span className="font-medium uppercase tracking-wide">
                  Play
                </span>
              </button>
              <button
                className="flex items-center justify-center rounded border border-[#f9f9f9] bg-black/30 py-[7px] px-8 text-xs text-[#f9f9f9] transition-all hover:bg-[#c6c6c6] md:px-12 md:py-[9px] md:text-base"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/assets/images/play-icon-white.svg"
                  alt=""
                  className="h-6"
                />
                <span className="font-medium uppercase tracking-wide">
                  Trailer
                </span>
              </button>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black/60">
                <PlusIcon className="h-6" />
              </div>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-black/60">
                <img src="/assets/images/group-icon.svg" />
              </div>
            </div>
            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} •{' '}
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
              {result.genres?.map((genre) => genre.name + ' ')}{' '}
            </p>
            <h4 className="max-w-4xl tracking-wider md:text-lg">
              {result.overview}
            </h4>
          </div>

          {/* Background Overlay */}
          {showPlayer && (
            <div className="absolute inset-0 z-50 h-full w-full bg-black opacity-50" />
          )}
          <div
            className={`absolute inset-x-[7%] top-3 overflow-hidden rounded transition duration-1000 md:inset-x-[13%] ${
              showPlayer ? 'z-50 opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-between bg-black p-3.5 text-[#f9f9f9]">
              <span className="font-semibold">Play Trailer</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <XIcon
                  className="h-5 cursor-pointer opacity-50 transition duration-200 hover:bg-[#0f0f0f] hover:opacity-75"
                  onClick={() => setShowPlayer(false)}
                />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0' }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Show;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const { showId } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  );

  const response = await request.json();

  return {
    props: {
      session,
      result: response,
    },
  };
};
