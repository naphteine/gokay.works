import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="sm:flex items-center justify-center">
        <div className="mr-5 sm:text-right">
          <h1 className="text-4xl md:text-5xl font-black">Gökay Gültekin</h1>
          <h2 className="text-lg md:text-2xl">Front-end · Next.js</h2>
          <p>
            Contact me via{" "}
            <em className="special-colored">ggltekn@gmail.com</em>
          </p>
          <p>
            Code at{" "}
            <a target="_blank" href="https://github.com/naphteine">
              github.com/naphteine
            </a>
          </p>
          <p>
            Blog at{" "}
            <a target="_blank" href="https://blog.gokay.works">
              blog.gokay.works
            </a>
          </p>
        </div>

        <Image
          src="https://cdn.gokay.works/gg/profile-004.png"
          alt={"Gökay Gültekin"}
          width={250}
          height={500}
          className="mt-4"
        />
      </header>
      <main>
        <h2 className="front-head">Who are you, really?</h2>
        <p className="text-justify">
          Hello, I&apos;m Gökay. I develop modern websites using Next.js (and
          sometimes with Svelte). Programming is my art and I will use anything
          to solve the problem, mainly JavaScript, Go and Common Lisp.
        </p>

        <p className="mt-4 text-justify">
          I have had an interest in programming since age 14. I was busy making{" "}
          <a href="https://github.com/trinityxtreme">mods</a> for my favorite
          video games. My highschool was focused on web development, where I
          learned basic C programming, C# and web design.
        </p>

        <p className="mt-4 text-justify">
          For university, I first attended and completed education in Ankara
          University. I studied Japanese Language and Literature, which was
          totally a blast for my hungry mind.
        </p>

        <p className="mt-4 text-justify">
          While I was attending that, I also studied Health Information Systems
          in Başkent University, where I learned more about programming, Go
          language (thanks to my final project) and Android app development (and
          had my first chance to use an oscilloscope). I finished this
          vocational education as the first in my class.
        </p>

        <p className="mt-4 text-justify">
          Right now I&apos;m studying International Relations in Anadolu
          University remotely while constantly tinkering with UI design,
          front-end development and Japanese language.
        </p>

        <h2 className="front-head">What I&apos;ve built</h2>
        <h3 className="text-lg font-medium">Alkandach</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://alkandach.com"
        >
          Visit
        </a>
        <p>
          Landing page with detailed gallery for Austrian roofing company
          Alkandach.
        </p>

        <h3 className="text-lg font-medium mt-6">Bâti-Réno 76</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://batireno.com"
        >
          Visit
        </a>
        <p>
          Business landing page for French interior design company Bâti-Réno 76.
        </p>

        <h3 className="text-lg font-medium mt-6">Mekan Dinçer</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mekandincer.com"
        >
          Visit
        </a>
        <p>Personal website for Turkish violin teacher Mekan Dinçer.</p>

        <h3 className="text-lg font-medium mt-6">Aether Elysium</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://aetherelysium.com"
        >
          Visit
        </a>
        <p>
          Online shop focused on garments. Most of my work was product
          management, optimization and design improvements.
        </p>

        <h2 className="front-head">Experiments and explorations</h2>
        <p>
          Here you can find some toy projects I made for personal or educational
          reasons, independent from any real life work. Most of them are still
          in flux.
        </p>

        <h3 className="text-lg font-medium mt-6">Wired</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wired.gokay.works"
        >
          Visit
        </a>
        <p>
          Experimental social media. I started this project to learn Svelte with
          practice. I used Supabase for database and auth management. It has
          very little userbase, entirely formed by my friends. Content is not
          managed so be advised.
        </p>

        <h3 className="text-lg font-medium mt-6">Soleil</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://soleil.gokay.works"
        >
          Visit
        </a>
        <p>Keeping track of TV series I watched.</p>

        <h3 className="text-lg font-medium mt-6">Cyperus</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cyperus.gokay.works"
        >
          Visit
        </a>
        <p>Personal physical library management app.</p>

        <h3 className="text-lg font-medium mt-6">Nitoji</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nitoji.gokay.works"
        >
          Visit
        </a>
        <p>
          Turkish-Japanese Dictionary. I have been planning to make a digital,
          easily usable dictionary for Japanese since my first year in
          university. There were many dictionary websites and apps for
          English-Japanese but none for my mother language. Also my professors
          always pointed to shortcomings and inaccurate information on these
          dictionaries so as someone with necessary skills and knowledge I
          thought that I could do something better.
        </p>

        <h3 className="text-lg font-medium mt-6">Kusuri</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kusuri.gokay.works"
        >
          Visit
        </a>
        <p>
          Online Medicine Tracking System. This is actually a remake of my final
          project in Başkent University. Me and a classmate of mine tried to
          make a web-based application where people would sign-up and add all
          the medicines they take regularly and give them alerts for expired
          drugs and when to take them. This, in turn, would create a massive
          online medicine catalog where everyone could use it. For the first
          version (which we delivered to our teacher) we used Go and SQLite.
          User interface was simple server-side HTML5 + CSS. We used Bootstrap 5
          and <a href="https://undraw.co/">unDraw</a> illustrations to make it
          look good.
        </p>

        <h3 className="text-lg font-medium mt-6">Kangal</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kangal.gokay.works"
        >
          Visit
        </a>
        <p>
          Web based double-entry accountant for personal use with inflation and
          shrinkflation tracking.
        </p>

        <h2 className="front-head">See also</h2>
        <Link className="font-semibold" href="/cv">
          Curriculum vitae
        </Link>
        <p className="mb-3">
          Education and work details in standard professional manner.
        </p>

        <Link className="font-semibold" href="/edu">
          Education
        </Link>
        <p className="mb-3">Detailed education history with lesson data.</p>

        <Link className="font-semibold" href="/stack">
          Stack
        </Link>
        <p className="mb-3">Programs and hardware I prefer to use.</p>

        <Link className="font-semibold" href="/bookmarks">
          Bookmarks
        </Link>
        <p className="mb-3">Various resources I collected.</p>

        <a
          target="_blank"
          className="font-semibold"
          href="https://studio.gokay.works"
        >
          Photography
        </a>
        <p className="mb-3">My attempts at photography.</p>

        <a
          target="_blank"
          className="font-semibold"
          href="https://www.radon-tx.com"
        >
          Radon Therapy
        </a>
        <p className="mb-3">Video games I&apos;ve made.</p>
      </main>
      <footer className="mt-14 text-sm text-gray-400">
        <Image
          src="/logo.png"
          alt="Personal logo"
          className="mx-auto pointer-events-none"
          width={50}
          height={50}
        />

        <p className="mt-2 text-center">
          Gökay Gültekin &copy; 2019-2025
          <br />
          <a
            className="text-center text-muted-foreground underline"
            href="https://github.com/naphteine/gokay.works"
          >
            Source code
          </a>
        </p>
      </footer>
    </>
  );
}
