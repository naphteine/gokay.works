import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-black">Gökay Gültekin</h1>
      <p>Front-end Web Developer</p>
      <Image
        src="https://cdn.gokay.works/gg/profile-004.png"
        alt={"Gökay Gültekin"}
        width={250}
        height={500}
        className="mt-4"
      />

      <h2 className="text-xl font-bold mt-8">Who are you, really?</h2>
      <p>
        Hello, I&apos;m Gökay. I develop modern websites using Next.js (and
        sometimes with Svelte). Programming is my art and I will use anything to
        solve the problem, mainly JavaScript, Go and Common Lisp.
      </p>

      <p className="mt-4">
        I have had an interest in programming since age 14. I was busy making{" "}
        <a href="https://github.com/trinityxtreme">mods</a> for my favorite
        video games. My highschool was focused on web development, where I
        learned basic C programming, C# and web design.
      </p>

      <p className="mt-4">
        For university, I first attended and completed education in Ankara
        University. I studied Japanese Language and Literature, which was
        totally a blast for my hungry mind.
      </p>

      <p className="mt-4">
        While I was attending that, I also studied Health Information Systems in
        Başkent University, where I learned more about programming, Go language
        (thanks to my final project) and Android app development (and had my
        first chance to use an oscilloscope). I finished this vocational
        education as the first in my class.
      </p>

      <p className="mt-4">
        Right now I&apos;m -only- studying International Relations in Anadolu
        University remotely while constantly tinkering with UI design, front-end
        development and Japanese language.
      </p>

      <h2 className="text-xl font-bold mt-14">Contact</h2>
      <p>
        You can contact me via <a href="mailto:ggltekn@gmail.com">my e-mail</a>.
      </p>

      <p>
        You can also find my code on{" "}
        <a href="https://github.com/naphteine">GitHub</a>.
      </p>

      <h2 className="text-xl font-bold mt-14">What I&apos;ve built</h2>
      <h3 className="text-lg font-medium">Alkandach</h3>
      <a target="_blank" rel="noopener noreferrer" href="https://alkandach.com">
        Visit
      </a>
      <p>
        Landing page with detailed gallery for Austrian roofing company
        Alkandach.
      </p>

      <h3 className="text-lg font-medium mt-6">Bâti-Réno 76</h3>
      <a target="_blank" rel="noopener noreferrer" href="https://batireno.com">
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
        Online shop focused on garments. Most of my work was product management,
        optimization and design improvements.
      </p>

      <h2 className="text-xl font-bold mt-14">Experiments and explorations</h2>
      <p>
        Here you can find some toy projects I made for personal or educational
        reasons, independent from any real life work. Most of them are still in
        flux.
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
        practice. I used Supabase for database and auth management. It has very
        little userbase, entirely formed by my friends. Content is not managed
        so be advised.
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
        Turkish-Japanese Dictionary. I was planning to make a digital, easily
        usable dictionary for Japanese since my first year in university. There
        were many dictionary websites and apps for English-Japanese but none for
        my mother languge. Also my professors always pointed to shortcomings and
        inaccurate information on these dictionaries so as someone with
        necessary skills and knowledge I thought that I could do something
        better.
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

      <h2 className="text-xl font-bold mt-14">See also</h2>
      <a className="font-semibold" href="https://www.radon-tx.com">
        Radon Therapy
      </a>
      <p className="mb-3">Video games I&apos;ve made.</p>

      <a className="font-semibold" href="https://blog.gokay.works">
        Personal blog
      </a>
      <p className="mb-3">
        I share my experiences as a developer and how I build software.
      </p>

      <a className="font-semibold" href="/cv">
        Résumé
      </a>
      <p className="mb-3">
        Education and work details in standard professional manner, aka
        curriculum vitae.
      </p>

      <a className="font-semibold" href="https://studio.gokay.works">
        Photography
      </a>
      <p className="mb-3">My amateur attempts at photography.</p>

      <a className="font-semibold" href="/stack">
        Stack
      </a>
      <p>Programs and hardware I prefer to use.</p>

      <footer className="mt-14">
        <Image
          src="/logo.png"
          alt="Personal logo"
          className="mx-auto pointer-events-none"
          width={50}
          height={50}
        />

        <p className="text-center">Gökay Gültekin &copy; 2019-2024</p>
      </footer>
    </main>
  );
}
