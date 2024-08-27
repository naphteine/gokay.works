import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 mx-auto mt-10 max-w-screen-lg">
      <h1 className="text-4xl font-black">Gökay Gültekin</h1>
      <p>Front-end Web Developer</p>
      <Image
        src="/profile.jpg"
        alt={"Gökay Gültekin"}
        width={250}
        height={500}
      />

      <h2 className="text-xl font-bold mt-5">Who are you, really?</h2>
      <p>
        Hello, I&apos;m Gökay. I develop modern websites using Next.js (and sometimes with Svelte).
        Programming is my art, and despite the fact that I will use anything to solve the problem, 
        I have most history with JavaScript, Go and Common Lisp.
      </p>

      <p className="mt-3">
        I had interest on programming since age 13. I was busy making game mods
        for my favorite video games. My highschool was focused on
        web-development, where I learned basic C programming and web
        development. For university, I first attended and completed education in
        Ankara University. I studied Japanese Language and Literature, which was
        totally a blast for my hungry mind. While I was attending that, I also
        studied Health Information Systems in Başkent University, where I
        learned more about programming, Go language (thanks to my final project)
        and Android app development. I finished this vocational training as
        first of my class. Right now I&apos;m studying International Relations
        in Anadolu University remotely.
      </p>

      <h2 className="text-xl font-bold mt-5">Contact</h2>
      <p>
        You can contact me via{" "}
        <a className="text-slate-600" href="mailto:ggltekn@gmail.com">
          my e-mail
        </a>
        .
      </p>

      <p>You can also find me on <a className="text-slate-600" href="https://github.com/naphteine">Github</a>.</p>

      <h2 className="text-xl font-bold mt-5">What I&apos;ve built</h2>
      <h3 className="text-lg font-medium">Alkandach</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://alkandach.com"
      >
        Visit
      </a>
      <p>
        Landing page with detailed gallery for Austrian roof cleaning company
        Alkandach.
      </p>

      <h3 className="text-lg font-medium">Bâti-Réno 76</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://batireno.com"
      >
        Visit
      </a>
      <p>
        Business landing page for French interior design company Bâti-Réno 76.
      </p>

      <h3 className="text-lg font-medium">Mekan Dinçer</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://mekandincer.com"
      >
        Visit
      </a>
      <p>Personal portfolio for violin teacher Mekan Dinçer.</p>

      <h3 className="text-lg font-medium">Aether Elysium</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://aetherelysium.com"
      >
        Visit
      </a>
      <p>
        Online shop focused on garments. Most of my work was product management, optimization and design improvements.
      </p>

      <h2 className="text-xl font-bold mt-5">Experiments and explorations</h2>
      <p>
        Here you can find some toys I made for personal or educational use,
        independent from any real life work.
      </p>

      <h3 className="text-lg font-medium">Wired</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://wired.gokay.works"
      >
        Visit
      </a>
      <h4>STATUS: ON HOLD</h4>
      <p>
        Experimental social media. I started this project to learn Svelte with
        practice. I used Supabase for database and auth management. I has very
        little userbase, entirely formed by my friends. Content is not managed
        so be advised.
      </p>

      <h3 className="text-lg font-medium">Soleil</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://soleil.gokay.works"
      >
        Visit
      </a>
      <h4>STATUS: ON HOLD</h4>
      <p>A simple website where I keep track of TV series I watched.</p>

      <h3 className="text-lg font-medium">Atay</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://atay.gokay.works"
      >
        Visit
      </a>
      <h4>STATUS: ON HOLD</h4>
      <p>Similar to Soleil, but focused on books I read.</p>

      <h3 className="text-lg font-medium">Nitoji</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://nitoji.gokay.works"
      >
        Visit
      </a>
      <h4>STATUS: ON HOLD</h4>
      <p>
        Turkish-Japanese Dictionary. I was planning to make a digital, easily
        usable dictionary for Japanese since my first year in university. There
        were many dictionary websites and apps for English-Japanese but none for
        my mother languge. Also my professors always pointed to shortcomings and
        inaccurate information on these dictionaries so as someone with
        necessary skills and knowledge I thought that I could do something
        better.
      </p>

      <h3 className="text-lg font-medium">Kusuri</h3>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600"
        href="https://kusuri.gokay.works"
      >
        Visit
      </a>
      <h4>STATUS: ON HOLD</h4>
      <p>
        Online Medicine Tracking System. This is actually remake of my final
        project in Başkent University. Me and a classmate of mine tried to make
        a web-based application where people would sign-up and add all the
        medicines they take regularly and give them alerts for expired drugs and
        when to take them. This, in turn, would create a massive online medicine
        catalog where everyone could use. For the first version (which we
        delivered to our teacher) we used Go and SQLite. User interface was
        simple server-side HTML5 + CSS. We used Bootstrap 5 and{" "}
        <a href="https://undraw.co/">unDraw</a> illustrations to make it look
        good.
      </p>

      <h2 className="text-xl font-bold mt-5">See also</h2>
      <a className="font-semibold" href="https://radon.gokay.works">Radon Therapy</a>
      <p className="mb-3">Video games I&apos;ve made.</p>

      <a className="font-semibold" href="https://blog.gokay.works">Personal blog</a>
      <p className="mb-3">I share my experiences as a developer and how I build software.</p>

      <a className="font-semibold" href="/cv">Résumé</a>
      <p className="mb-3">Education and work details in standard professional manner, aka curriculum vitae.</p>

      <a className="font-semibold" href="https://instagram.com/gyo.ku">Photography</a>
      <p className="mb-3">My amateur attempts at photography.</p>

      <a className="font-semibold" href="/stack">Stack</a>
      <p>Programs and hardware I prefer to use.</p>

      <h2 className="text-xl font-bold mt-5">PS. Be advised, everything is being rebuilt from scratch.</h2>

      <footer>
        <Image
          src="/logo.png"
          alt="Personal logo"
          className="mx-auto mt-10"
          width={50}
          height={50}
        />

        <p className="text-center mb-10">
          All rights reserved. Gökay Gültekin. &copy; 2019-2024.
        </p>
      </footer>
    </main>
  );
}
