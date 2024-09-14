export default function Stack() {
    return (
        <main className="my-10 px-10">
            <h1 className="text-4xl font-black">My Stack</h1>
            <h2 className="mt-5 text-2xl font-semibold">Platforms</h2>
            <ul>
                <li><a href="https://vercel.com/">Vercel</a></li>
                <li><a href="https://www.netlify.com/">Netlify</a></li>
                <li><a href="https://supabase.com/">Supabase</a></li>
                <li><a href="https://www.hetzner.com/">Hetzner</a></li>
                <li><a href="https://www.namecheap.com/">Namecheap</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Self-hosting</h2>
            <ul>
                <li><a href="https://caddyserver.com/">Caddy</a></li>
                <li><a href="https://pocketbase.io/">Pocketbase</a></li>
                <li><a href="https://forgejo.org/">Forgejo</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Software</h2>
            <ul>
                <li><a href="https://man.openbsd.org/ksh.1"><abbr title="Public domain Korn shell">pdksh</abbr></a></li>
                <li><a href="https://man.openbsd.org/OpenBSD-current/man1/tmux.1"><abbr title="terminal multiplexer">tmux</abbr></a></li>
                <li><a href="https://man.openbsd.org/ssh.1"><abbr title="openssh - secure shell">ssh</abbr></a></li>
                <li><a href="https://git-scm.com/"><abbr title="the stupid content tracker">git</abbr></a></li>
                <li><a href="https://github.com/apps/desktop">GitHub Desktop (When I want a GUI)</a></li>
                <li><a href="https://logseq.com/">Logseq</a></li>
                <li><a href="https://newsboat.org/">Newsboat</a></li>
                <li><a href="https://weechat.org/">Weechat</a></li>
                <li><a href="https://code.visualstudio.com/">VS Code</a></li>
                <li><a href="https://www.gnu.org/software/emacs/">Emacs (For Lisp + orgmode)</a></li>
                <li><a href="https://neovim.io/">Neovim or vi (For quick edit on cli)</a></li>
                <li><a href="https://www.blender.org/">Blender</a></li>
                <li><a href="https://www.mozilla.org/en-US/firefox/">Mozilla Firefox (My main since 2007)</a></li>
                <li><a href="https://www.opera.com/browsers/opera">Opera (For testing Chromium)</a></li>
                <li><a href="https://lynx.invisible-island.net/">Lynx (For terminal only + testing)</a></li>

            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Desktop</h2>
            <ul>
                <li><a href="https://www.gnome.org/">GNOME</a></li>
                <li><a href="https://man.openbsd.org/cwm">cwm</a></li>
                <li><a href="https://www.fvwm.org/">FVWM (For special occusions)</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Operating systems</h2>
            <ul>
                <li><a href="https://endeavouros.com/">Endeavour OS</a></li>
                <li><a href="https://openbsd.org/">OpenBSD</a></li>
                <li><a href="https://voidlinux.org/">Void Linux</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Security</h2>
            <ul>
                <li><a href="https://cisofy.com/lynis/">Lynis</a></li>
                <li><a href="https://gitleaks.io/">Gitleaks</a></li>
            </ul>
            
            <h2 className="mt-5 text-2xl font-semibold">News</h2>
            <ul>
                <li><a href="https://news.ycombinator.com/news">ycombinator</a></li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Design</h2>
            <ul>
                <li><a href="https://tailwindcss.com/">Tailwind</a></li>
                <li><a href="https://ui.shadcn.com/">shadcn/ui</a></li>
                <li><a href="https://www.figma.com/">Figma</a></li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Lightroom</li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Programming languages</h2>
            <ul>
                <li>Primary: JavaScript, TypeScript</li>
                <li>Secondary: Go, Elixir</li>
                <li>Favorite: Common Lisp</li>
                <li>Planned: Ada, Rust, Perl</li>
                <li>Working knowledge: C, C++</li>
            </ul>

            <h2 className="mt-5 text-2xl font-semibold">Future</h2>
            <ul>
                <li><a href="https://tauri.app/">Tauri</a></li>
                <li><a href="https://coolify.io">Coolify</a></li>
                <li><a href="https://bun.sh/">Bun</a></li>
                <li><a href="https://umami.is/">Umami</a></li>
                <li><a href="https://cloudinary.com/">Cloudinary</a></li>
            </ul>

            <footer>
                <p className="mt-5">Also check my <a href="/bookmarks">bookmarks</a>, <a href="/friends">friends</a> and <a href="/lisp">Common Lisp</a> pages.</p>    
            </footer>                                                                    
        </main>
    )
}