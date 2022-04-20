import Image from 'next/image';
import Head from 'next/head';

function Hero() {
  return (
    <section>
      <Head>
        <title>Log in | Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/assets/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute top-1/4 mx-auto -mt-16 flex w-full max-w-screen-sm flex-col items-center justify-center space-y-3 p-8">
          <Image
            src="/assets/images/cta-logo-one.svg"
            width={600}
            height={150}
            objectFit="contain"
          />
          <button className="w-full rounded bg-blue-600 py-4 px-6 text-xl font-extrabold uppercase tracking-wide hover:bg-[#0485ee]">
            Get all there
          </button>
          <p className="text-center text-xs ">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $2.99 / month
          </p>
          <Image
            src="/assets/images/cta-logo-two.png"
            width={600}
            height={70}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
