export default function Stack() {
    return (
        <main className="max-w-screen-lg mx-auto my-10 px-10">
            <h1 className="text-4xl font-black">My Stack</h1>
            <h2 className="mt-5 text-2xl font-semibold">Webdev service providers</h2>
            <ul>
                <li><a href="https://supabase.com/">Supabase</a></li>
                <li><a href="https://vercel.com/">Vercel</a></li>
                <li><a href="https://www.netlify.com/">Netlify</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Self-hosting</h2>
            <ul>
                <li><a href="https://pocketbase.io/">Pocketbase</a></li>
                <li><a href="https://gogs.io/">Gogs</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Software</h2>
            <ul>
                <li><a href="https://vscodium.com/">VS Codium</a></li>
                <li><a href="https://man.openbsd.org/ksh.1">Public domain Korn shell</a></li>
                <li><a href="https://logseq.com/">Logseq</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Desktop Environments / Window Managers</h2>
            <ul>
                <li><a href="https://www.gnome.org/">GNOME</a></li>
                <li><a href="https://man.openbsd.org/cwm">cwm</a></li>
                <li><a href="https://www.fvwm.org/">FVWM</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Operating systems</h2>
            <ul>
                <li><a href="https://endeavouros.com/">Endeavour OS</a></li>
                <li><a href="https://openbsd.org/">OpenBSD</a></li>
                <li><a href="https://voidlinux.org/">Void Linux</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Hosting and domain providers</h2>
            <ul>
                <li><a href="https://www.hetzner.com/">Hetzner</a></li>
                <li><a href="https://www.digitalocean.com/">DigitalOcean</a></li>
                <li><a href="https://www.namecheap.com/">Namecheap</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Webdev tech</h2>
            <ul>
                <li><a href="https://tailwindcss.com/">Tailwind</a></li>
                <li><a href="https://ui.shadcn.com/">shadcn/ui</a></li>
            </ul>
            
            <h2 className="mt-5 text-2xl font-semibold">News</h2>
            <ul>
                <li><a href="https://news.ycombinator.com/news">ycombinator</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Design</h2>
            <ul>
                <li><a href="https://www.figma.com/">Figma</a></li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Lightroom</li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">CLI</h2>
            <ul>
                <li><a href="https://newsboat.org/">Newsboat</a></li>
                <li><a href="https://weechat.org/">Weechat</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Future</h2>
            <ul>
                <li><a href="https://tauri.app/">Tauri</a></li>
                <li><a href="https://coolify.io">Coolify</a></li>
                <li><a href="https://bun.sh/">Bun</a></li>
            </ul>

            <footer>
                <p className="mt-5">Also check my <a href="/bookmarks">bookmarks</a>, <a href="/friends">friends</a> and <a href="/lisp">Common Lisp</a> pages.</p>    
            </footer>                                                                    
        </main>
    )
}