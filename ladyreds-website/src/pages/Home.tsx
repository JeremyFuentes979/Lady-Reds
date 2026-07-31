import { useState } from 'react'
import {
  MapPin, Mail, Facebook, Trophy, CalendarDays, Users,
  ChevronRight, Menu, X, Megaphone, Send, CheckCircle2,
  ShoppingBag, Handshake,
} from 'lucide-react'
import { team, roster, coaches, coachNotes, tournaments, sponsorTiers, sponsorNote, currentSponsors, storeUrl } from '../config'
import logo from '../assets/lady-reds-logo.jpg'
import rosterReveal from '../assets/roster-reveal.jpg'
import brawlPoster from '../assets/brawl-4-it-all.jpg'

/* ── small building blocks ─────────────────────────────────────────── */

function SectionHeading({ kicker, title, dark = false }: { kicker: string; title: string; dark?: boolean }) {
  return (
    <div className="text-center mb-12">
      <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">{kicker}</p>
      <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-neutral-900'}`}>{title}</h2>
      <div className="mt-4 mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-red-800 via-red-500 to-red-800" />
    </div>
  )
}

function JerseyCard({ number, name, positions, bats, throws }: {
  number: number; name: string; positions: string; bats: string; throws: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-md hover:shadow-red-900/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-800">
      <div className="relative h-44 bg-gradient-to-br from-red-800 via-red-700 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, white 2px, transparent 2px)', backgroundSize: '28px 28px' }} />
        {/* jersey placeholder — swap for a player photo */}
        <span className="text-7xl font-black text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{number}</span>
        <span className="absolute bottom-2 right-3 text-[10px] font-semibold uppercase tracking-widest text-white/60">Photo coming soon</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-white">#{number} {name}</h3>
        {positions && <p className="text-red-500 font-semibold text-sm">{positions}</p>}
        {(bats || throws) && <p className="text-neutral-400 text-sm mt-1">{bats && `Bats ${bats}`}{bats && throws && ' · '}{throws && `Throws ${throws}`}</p>}
      </div>
    </div>
  )
}

const statusStyles: Record<string, string> = {
  Upcoming: 'bg-neutral-800 text-neutral-300',
  Registered: 'bg-blue-950 text-blue-300',
  Champions: 'bg-amber-950 text-amber-300',
  Completed: 'bg-green-950 text-green-300',
}

/* ── page ───────────────────────────────────────────────────────────── */

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)
  const [form, setForm] = useState({ parent: '', player: '', age: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(team.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = team.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const links = [
    { href: '#roster', label: 'Roster' },
    { href: '#coaches', label: "Coaches' Corner" },
    { href: '#tournaments', label: 'Tournaments' },
    { href: '#store', label: 'Fan Store' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#our-sponsors', label: 'Our Sponsors' },
    { href: '#inquiries', label: 'Inquiries' },
  ]

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Parent/Guardian: ${form.parent}\nPlayer: ${form.player}\nAge Group: ${form.age}\n\n${form.message}`,
    )
    window.location.href = `mailto:${team.email}?subject=${encodeURIComponent(`Lady Reds Inquiry — ${form.player || form.parent}`)}&body=${body}`
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-black font-sans">

      {/* ── Nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur text-white shadow-lg border-b border-red-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight">
            <img src={logo} alt="Lady Reds logo" className="h-10 w-auto rounded-md" />
            {team.name} <span className="hidden sm:inline text-red-500 font-semibold text-sm">10U Softball</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-red-400 transition-colors">{l.label}</a>
            ))}
            <a href="#inquiries" className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">Join the Team</a>
          </nav>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
        {navOpen && (
          <nav className="md:hidden bg-neutral-950 px-4 pb-4 flex flex-col gap-3 text-sm font-semibold">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setNavOpen(false)} className="py-1">{l.label}</a>
            ))}
          </nav>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative pt-16 overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-red-950 text-white">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* stylized field */}
          <path d="M50 95 L20 60 A45 45 0 0 1 80 60 Z" fill="none" stroke="white" strokeWidth="0.8" />
          <path d="M50 95 L35 72 L50 60 L65 72 Z" fill="none" stroke="white" strokeWidth="0.8" />
          <circle cx="50" cy="78" r="1.2" fill="white" />
          <circle cx="35" cy="72" r="0.8" fill="white" /><circle cx="65" cy="72" r="0.8" fill="white" /><circle cx="50" cy="60" r="0.8" fill="white" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <img src={logo} alt="Lady Reds team logo" className="mx-auto w-64 md:w-96 drop-shadow-[0_10px_40px_rgba(220,38,38,0.35)]" />
          <p className="mt-8 uppercase tracking-[0.4em] text-red-500 font-bold text-sm">{team.tagline}</p>
          <p className="mt-3 text-xl md:text-2xl text-neutral-300 font-medium">{team.motto}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#tournaments" className="bg-red-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors inline-flex items-center gap-2">
              <Trophy className="w-5 h-5" /> 2026 Schedule
            </a>
            <a href="#inquiries" className="border-2 border-red-600 text-red-500 font-bold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition-colors inline-flex items-center gap-2">
              <Mail className="w-5 h-5" /> Player Inquiries
            </a>
          </div>
        </div>
        <svg className="block w-full text-neutral-950" viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 80h1440V40C1080 0 360 0 0 40z" fill="currentColor" /></svg>
      </section>

      {/* ── About strip ── */}
      <section className="bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: 'Who We Are', text: `A competitive 10U travel fastpitch team based in ${team.city}, building skills, confidence, and lifelong friendships.` },
            { icon: MapPin, title: 'Where We Play', text: `Home field: ${team.homeField}. We travel to tournaments across the region all spring and summer.` },
            { icon: Trophy, title: 'How We Compete', text: 'Focused on fundamentals, hustle, and sportsmanship — developing athletes for the next level while loving the game.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-neutral-900 rounded-2xl p-8 shadow-md border border-neutral-800 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-red-950 text-red-500 flex items-center justify-center mb-4"><Icon className="w-7 h-7" /></div>
              <h3 className="font-extrabold text-xl text-white mb-2">{title}</h3>
              <p className="text-neutral-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roster ── */}
      <section id="roster" className="bg-black py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading kicker="2026 Fall Ball" title="Team Roster" dark />
          <div className="mb-12 flex justify-center">
            <img
              src={rosterReveal}
              alt="Lady Reds 2026 Fall Ball roster reveal poster"
              className="rounded-2xl border border-red-900 shadow-[0_10px_50px_rgba(220,38,38,0.25)] w-full max-w-md"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {roster.map(p => <JerseyCard key={p.number} {...p} />)}
          </div>
          <p className="text-center text-neutral-500 mt-8 text-sm">
            Player photos will be added with parent permission — team families can send photos to the team email.
          </p>
        </div>
      </section>

      {/* ── Coaches' Corner ── */}
      <section id="coaches" className="py-20 scroll-mt-16 bg-gradient-to-b from-neutral-950 via-neutral-950 to-red-950/40">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading kicker="Leadership" title="Coaches' Corner" dark />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {coaches.map(c => (
              <div key={c.role} className="bg-neutral-900 rounded-2xl p-8 shadow-md border border-neutral-800 text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-red-700 to-black text-white flex items-center justify-center text-3xl font-black mb-4 shadow-inner border border-red-800">
                  {c.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-extrabold text-xl text-white">{c.name}</h3>
                <p className="text-red-500 font-semibold text-sm mb-3">{c.role}</p>
                <p className="text-neutral-400 text-sm">{c.bio}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coachNotes.map(n => (
              <div key={n.title} className="rounded-2xl border-l-4 border-red-600 bg-neutral-900 p-6 shadow-sm border-y border-r border-neutral-800">
                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest mb-2">
                  <Megaphone className="w-4 h-4" /> {n.date}
                </div>
                <h4 className="font-bold text-lg text-white mb-1">{n.title}</h4>
                <p className="text-neutral-400 text-sm">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tournaments ── */}
      <section id="tournaments" className="bg-gradient-to-b from-red-950 to-black py-20 text-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">Game On</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tournament Schedule</h2>
            <div className="mt-4 mx-auto h-1.5 w-24 rounded-full bg-red-600" />
          </div>
          {/* First tournament feature */}
          <div className="mb-10 bg-white/5 border border-red-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <img
              src={brawlPoster}
              alt="Brawl 4 It All — Texas Championship Softball Tournament poster"
              className="w-full md:w-64 rounded-2xl shadow-[0_10px_40px_rgba(220,38,38,0.25)] shrink-0"
            />
            <div className="text-center md:text-left">
              <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-2">First Tournament of the Season</p>
              <h3 className="text-2xl md:text-3xl font-extrabold">Brawl 4 It All — Texas Championship</h3>
              <p className="text-red-300 font-semibold mt-1">Presented by Coach Joe's Sports Events</p>
              <div className="mt-4 space-y-1.5 text-neutral-300 text-sm">
                <p className="flex items-center justify-center md:justify-start gap-2"><CalendarDays className="w-4 h-4 text-red-500" /> 10U Division — Saturday, August 15, 2026</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><MapPin className="w-4 h-4 text-red-500" /> Victoria Youth Softball Complex, Victoria, TX</p>
                <p className="flex items-center justify-center md:justify-start gap-2"><Trophy className="w-4 h-4 text-red-500" /> 4-game guarantee · 8 teams per division · 1st–3rd place awards</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {tournaments.map(t => (
              <div key={t.name} className="bg-white/5 backdrop-blur rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 hover:bg-white/10 transition-colors border border-neutral-800">
                <div className="flex items-center gap-3 md:w-56 shrink-0">
                  <CalendarDays className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="font-bold">{t.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-lg">{t.name}</h3>
                  <p className="text-neutral-400 text-sm flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {t.location} · {t.format}</p>
                  {t.result && <p className="text-amber-400 text-sm font-semibold mt-1 flex items-center gap-1"><Trophy className="w-3.5 h-3.5" /> {t.result}</p>}
                </div>
                <span className={`self-start md:self-center text-xs font-bold px-3 py-1.5 rounded-full ${statusStyles[t.status]}`}>{t.status}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-500 text-sm mt-8">Schedule subject to change — check with coaches for the latest updates.</p>
        </div>
      </section>

      {/* ── Fan Store ── */}
      <section id="store" className="py-20 scroll-mt-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading kicker="Rep the Reds" title="Fan Store" dark />
          <p className="text-center text-neutral-400 -mt-6 mb-6 max-w-2xl mx-auto">
            Gear up for game day! Every purchase supports the team. Order directly from our official vendor, Small Town Advertising.
          </p>
          <div className="text-center">
            <a href={storeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-red-700 text-white font-bold px-8 py-3.5 rounded-full hover:bg-red-600 transition-colors shadow-lg">
              <ShoppingBag className="w-5 h-5" /> Shop the Official Lady Reds Store
            </a>
            <p className="text-neutral-500 text-sm mt-6 flex items-center justify-center gap-2">
              Orders, payment, and fulfillment are handled by Small Town Advertising.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sponsorship ── */}
      <section id="sponsors" className="py-20 scroll-mt-16 bg-gradient-to-b from-black via-red-950/30 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading kicker="Support the Team" title="Become a Sponsor" dark />
          <p className="text-center text-neutral-400 -mt-6 mb-10 max-w-2xl mx-auto">{sponsorNote}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {sponsorTiers.map(tier => (
              <div key={tier.name} className={`bg-neutral-900 rounded-2xl p-7 border-t-4 ${tier.color} border-x border-b border-neutral-800 shadow-md flex flex-col`}>
                <h3 className="font-extrabold text-lg text-white">{tier.name}</h3>
                <p className="text-3xl font-black text-red-500 mt-1 mb-4">{tier.price}{tier.price !== 'Any' && <span className="text-sm font-semibold text-neutral-500"> /season</span>}</p>
                <ul className="space-y-2.5 flex-1">
                  {tier.perks.map(perk => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${team.email}?subject=${encodeURIComponent(`Sponsorship Inquiry — ${tier.name}`)}&body=${encodeURIComponent(`Hi Lady Reds,\n\nWe're interested in becoming a sponsor at the "${tier.name}" level${tier.price !== 'Any' ? ` (${tier.price}/season)` : ''}. Please send us the CashApp link and any next steps.\n\nBusiness Name:\nContact Name:\nPhone:\n\nThank you!`)}`}
                  className="mt-6 block text-center bg-red-700 text-white text-sm font-bold py-2.5 rounded-full hover:bg-red-600 transition-colors"
                >
                  Sponsor Us
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-400 text-sm mt-10 flex items-center justify-center gap-2">
            <Handshake className="w-4 h-4 text-red-500" />
            Interested in sponsoring? Click a "Sponsor Us" button above or email <a className="text-red-500 font-semibold hover:underline" href={`mailto:${team.email}`}>{team.email}</a> — we'll reply with our CashApp link and next steps.
          </p>
        </div>
      </section>

      {/* ── Inquiries ── */}
      <section id="inquiries" className="py-20 scroll-mt-16 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading kicker="Get In Touch" title="Player & Family Inquiries" dark />
          <p className="text-center text-neutral-400 -mt-6 mb-10">
            Interested in joining the Lady Reds, scheduling a tryout, or have a question? Send us a message below.
          </p>
          {sent ? (
            <div className="bg-green-950/40 border border-green-800 rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-extrabold text-xl text-white mb-1">Almost there!</h3>
              <p className="text-neutral-400">Your email app should have opened with your message pre-filled — just hit send. If it didn't, email us directly at <a className="text-red-500 font-semibold" href={`mailto:${team.email}`}>{team.email}</a>.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-red-500 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-neutral-900 rounded-2xl shadow-lg border border-neutral-800 p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-neutral-300 mb-1">Parent / Guardian Name *</label>
                  <input required value={form.parent} onChange={e => setForm({ ...form, parent: e.target.value })}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-neutral-600" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-300 mb-1">Player Name *</label>
                  <input required value={form.player} onChange={e => setForm({ ...form, player: e.target.value })}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-neutral-600" placeholder="Player's name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-neutral-300 mb-1">Player Age / Birth Year</label>
                  <input value={form.age} onChange={e => setForm({ ...form, age: e.target.value })}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-neutral-600" placeholder="e.g. 2016" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-300 mb-1">Your Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-neutral-600" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-300 mb-1">Message *</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-950 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder:text-neutral-600"
                  placeholder="Tell us about your player — experience, positions, and what you're looking for in a team." />
              </div>
              <button type="submit" className="w-full bg-red-700 text-white font-bold py-3.5 rounded-full hover:bg-red-600 transition-colors inline-flex items-center justify-center gap-2 shadow-md">
                <Send className="w-5 h-5" /> Send Inquiry
              </button>
              <p className="text-xs text-neutral-500 text-center">This opens your email app with the message pre-filled — nothing is stored on this site.</p>
            </form>
          )}
        </div>
      </section>

      {/* ── Our Sponsors ── */}
      <section id="our-sponsors" className="py-16 bg-neutral-950 border-t border-red-900/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-2">Thank You</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">Our Sponsors</h2>
          <p className="text-neutral-400 mb-10">The Lady Reds are powered by these great Columbus, TX area businesses.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {currentSponsors.map(s => (
              <div key={s.tier} className="bg-neutral-900 border border-dashed border-neutral-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 hover:border-red-700 transition-colors">
                <Handshake className="w-8 h-8 text-red-600" />
                <p className="font-bold text-white">{s.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-500">{s.tier}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-sm mt-8">
            Want your business featured here? <a href="#sponsors" className="text-red-500 font-semibold hover:underline">See sponsorship levels</a> or <a href="#inquiries" className="text-red-500 font-semibold hover:underline">get in touch</a>.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-neutral-950 border-t border-red-900 text-neutral-400 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-lg">
            <img src={logo} alt="Lady Reds logo" className="h-9 w-auto rounded-md" /> {team.name} 10U
          </div>
          <div className="flex flex-col items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              <a href={`mailto:${team.email}`} className="hover:text-white font-semibold">{team.email}</a>
              <button onClick={copyEmail} className="ml-1 text-xs font-bold bg-neutral-800 hover:bg-red-700 text-neutral-300 hover:text-white px-3 py-1 rounded-full transition-colors">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="flex items-center gap-6">
              <a href={team.facebook} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-1.5"><Facebook className="w-4 h-4" /> Facebook</a>
              <a href="#top" className="hover:text-white inline-flex items-center gap-1.5">Back to top <ChevronRight className="w-4 h-4 -rotate-90" /></a>
            </div>
          </div>
          <p className="text-xs text-neutral-600">© 2026 {team.name} 10U Travel Softball · {team.city}</p>
        </div>
      </footer>
    </div>
  )
}
