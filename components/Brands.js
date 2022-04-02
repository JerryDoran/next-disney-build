import Image from 'next/image'

function Brands() {
  return (
    <section className="mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-center gap-6 px-8 md:flex-row">
      <div className="brand group">
        <Image
          src="/assets/images/disnep.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/assets/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image src="/assets/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/assets/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/assets/images/marvel.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/assets/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/assets/images/starwars.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/assets/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/assets/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source
            src="/assets/videos/national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  )
}

export default Brands
