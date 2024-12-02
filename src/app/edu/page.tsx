import Link from "next/link";

export default function Resume() {
  return (
    <main>
      <h1 className="text-4xl text-center">Education Details</h1>

      <h2 className="text-3xl font-bold mt-8 mb-4">Ankara University</h2>
      <ul>
        <li>Japanese Writing (I-IV) & Kanji (V-VIII)</li>
        <li>Japanese Grammar</li>
        <li>Türk Japon İlişkileri Tarihi</li>
        <li>Japenese Calligraphy</li>
        <li>Cognitive Linguistics and Japanese</li>
        <li>Classical Japanese Literature I-II</li>
        <li>Japanese History</li>
        <li>Translation</li>
        <li>
          Graduation Thesis (Undergraduate, &ldquo;Gen&apos;yōsha and
          Kokuryūkai&rdquo;)
        </li>

        <ul className="mt-3">
          <li>Selective | Sculpture</li>
          <li>Selective | Painting</li>
          <li>Selective | Chinese Language I</li>
          <li>Selective | Italian</li>
          <li>Selective | New Media and Social Relations</li>
          <li>Selective | History of Communication</li>
          <li>Selective | General Psychology I</li>
          <li>Selective | Contemporary Ethical Theories</li>
        </ul>
      </ul>

      <ul className="mt-3">
        <li>Club Activity | Shodō (書道)</li>
        <li>Club Activity | Shogi (将棋)</li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Başkent University</h2>
      <ul>
        <li>Computer Literacy</li>
        <li>Introduction to Algorithm and Programming</li>
        <li>Vocational Mathematics I-II</li>
        <li>Electronic Manufacturing Technology</li>
        <li>Electrical Installation Drawing</li>
        <li>C Programming</li>
        <li>Object Oriented Programming I</li>
        <li>Visual Programming I</li>
        <li>Database I-II</li>
        <li>Mobile Applications I-II</li>
        <li>Basic Electricity and Electronics</li>
        <li>Microcontroller</li>
        <li>Sensors</li>
        <li>Network Fundamentals</li>

        <ul className="mt-3">
          <li>Medical Terminology</li>
          <li>Medical Documentation I</li>
          <li>Health Informatics</li>
          <li>Hospital Information Management Systems</li>
          <li>Health Information Systems</li>
          <li>First Aid</li>
        </ul>

        <ul className="mt-3">
          <li>Summer Practice</li>
          <li>
            Vocational Project (you can find it{" "}
            <Link
              target="_blank"
              href="https://github.com/naphteine/medicine-warning"
            >
              here
            </Link>
            )
          </li>
        </ul>

        <ul className="mt-3">
          <li>Selective | Anatolian Archeology</li>
        </ul>
      </ul>
    </main>
  );
}
