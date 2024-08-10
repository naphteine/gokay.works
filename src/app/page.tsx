import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Gökay Gültekin</h1>
      <p>Front-end Web Developer</p>
      <Image
        src="/profile.jpg"
        alt={"Gökay Gültekin"}
        width={250}
        height={500}
      />

      <hr />

      <h2 className="text-xl font-bold">Who are you, really?</h2>
      <p>
        I&apos;m Gökay. I develop modern websites using Next.js (and sometimes
        with Svelte). I like programming, using languages such as JavaScript and
        Go.
      </p>

      <h2 className="text-xl font-bold">Contact</h2>
      <p>
        You can contact me via{" "}
        <a className="text-slate-600" href="mailto:ggltekn@gmail.com">
          my e-mail
        </a>
        .
      </p>

      <h2 className="text-xl font-bold">Projects I&apos;ve Worked On</h2>
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

      <h3 className="text-lg font-medium">Bati-Reno</h3>
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
        Online shop focused on garments. Most of my work was product management
        and optimization.
      </p>

      <Image src="/logo.png" alt="Personal logo" width={50} height={50} />
    </main>
  );
}
