import Image from "next/image";

export default function Lisp() {
    return (
        <main>
            <h1 className="text-4xl font-black">Common Lisp</h1>
            <h2 className="text-2xl font-bold mt-5">Programs I use</h2>
            <ul>
                <li><a href="https://www.sbcl.org/">SBCL</a></li>
                <li><a href="https://www.gnu.org/software/emacs/">GNU Emacs</a></li>
                <li><a href="https://github.com/joaotavora/sly">Sly</a></li>
                <li><a href="https://qlot.tech/">Qlot</a></li>
            </ul>

            <h2 className="text-2xl font-bold mt-5">Reading room</h2>
            <ul>
                <li><a href="http://clhs.lisp.se/Front/index.htm">Common Lisp Hyperspec</a></li>
                <li><a href="https://gigamonkeys.com/book/">Practical Common Lisp - Peter Seibel (Book)</a></li>
                <li><a href="https://paulgraham.com/avg.html">Beating the Averages - Paul Graham (Article)</a></li>
                <li><a href="https://web.mit.edu/6.001/6.037/sicp.pdf">Structure and Interpretations of Computer Programs - Gerald Jay Sussman, Hal Abelson, Julie Sussman (Book)</a></li>
            </ul>

            <h2 className="text-2xl font-bold mt-5">Interesting people</h2>
            <ul>
                <li><a href="https://8arrow.org/"><ruby>深町<rt>Fukamachi</rt></ruby> <ruby>英太郎<rt>Eitarō</rt></ruby></a></li>
                <li><a href="https://paulgraham.com/">Paul Graham</a></li>
                <li><a href="https://shinmera.com/">Yukari Hafner</a></li>
                <li><a href="https://xach.com/">Zachary P. Beane</a></li>
            </ul>

            <h2 className="text-2xl font-bold mt-5">Worth mentioning</h2>
            <ul>
                <li><a href="https://github.com/ocicl/ocicl">ocicl - OCI-based ASDF system distribution and management tool</a></li>
                <li><a href="https://stumpwm.github.io/">Stump Window Manager - Tiling, keyboard-driven WM written entirely in Common Lisp</a></li>
            </ul>

            <Image src={"/lisp.png"} width={430/3} height={345} alt="Lisp logo" />
        </main>
    )
}