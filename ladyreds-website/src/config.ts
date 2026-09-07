// ─── Lady Reds 10U — edit team info here ────────────────────────────────

export const team = {
  name: 'Lady Reds',
  tagline: '10U Travel Fastpitch Softball',
  motto: 'One Team. One Goal. One Red Family.',
  email: 'ladyredsoftball26@gmail.com',
  facebook: 'https://www.facebook.com/share/1BiPuHfMoB/',
  homeField: 'Columbus, TX — Local Ballpark',
  city: 'Columbus, TX',
}

export const roster = [
  // photo: leave empty to show the red jersey placeholder.
  // To use real photos, drop image files in src/assets and set photo to the filename.
  { number: 1, name: 'Kyndal Hoffman', positions: '', bats: '', throws: '', photo: '' },
  { number: 6, name: 'Zuri Earls', positions: '', bats: '', throws: '', photo: '' },
  { number: 7, name: 'Khloe Rebel', positions: '', bats: '', throws: '', photo: '' },
  { number: 8, name: 'Demi Stevens', positions: '', bats: '', throws: '', photo: '' },
  { number: 10, name: 'Lilly Arango', positions: '', bats: '', throws: '', photo: '' },
  { number: 15, name: 'Dani Fuentes', positions: '', bats: '', throws: '', photo: '' },
  { number: 16, name: 'Marie Cardenas', positions: '', bats: '', throws: '', photo: '' },
  { number: 19, name: 'Maddy Earls', positions: '', bats: '', throws: '', photo: '' },
  { number: 23, name: 'Elizabeth Taylor', positions: '', bats: '', throws: '', photo: '' },
  { number: 24, name: 'Issa Bree', positions: '', bats: '', throws: '', photo: '' },
  { number: 27, name: 'Addy Dorsey', positions: '', bats: '', throws: '', photo: '' },
  { number: 52, name: 'Ciara Frnka', positions: '', bats: '', throws: '', photo: '' },
  { number: 67, name: 'Jade Nelson', positions: '', bats: '', throws: '', photo: '' },
]

export const coaches = [
  {
    name: 'JJ Reggins',
    role: 'Head Coach',
    bio: '',
    photo: '',
  },
  {
    name: 'Darius Stevens',
    role: 'Assistant Coach',
    bio: '',
    photo: '',
  },
  {
    name: 'Chris Dorsey',
    role: 'Assistant Coach',
    bio: '',
    photo: '',
  },
]

export const coachNotes = [
  {
    title: 'This Week’s Focus',
    date: 'Practice Plan',
    text: 'Defensive fundamentals: footwork on ground balls, communication on pop-ups, and hitting cutoff throws. Bring water and be ready to work!',
  },
  {
    title: 'Tournament Reminders',
    date: 'Team Info',
    text: 'Arrive 60 minutes before first pitch. Full uniform, red socks and belts. Coolers welcome — no sunflower seeds in the dugout, please.',
  },
  {
    title: 'Player Development',
    date: 'At-Home Work',
    text: '15 minutes of tee work and 50 catches a day builds champions. Pitchers: log your bullpens in the team app.',
  },
]

export type MerchItem = {
  name: string
  price: string
  description: string
  tag?: string
  sizes?: string
  icon: 'shirt' | 'cap' | 'hoodie' | 'bag' | 'decal' | 'blanket'
}

export const merch: MerchItem[] = [
  { name: 'Lady Reds Replica Jersey', price: '$35', description: 'Official team jersey in black and red with the Lady Reds logo.', tag: 'Best Seller', sizes: 'Youth S–XL, Adult S–3XL', icon: 'shirt' },
  { name: 'Team Hoodie', price: '$40', description: 'Cozy black fleece hoodie with red Lady Reds lettering across the chest.', sizes: 'Youth S–XL, Adult S–3XL', icon: 'hoodie' },
  { name: 'Lady Reds Cap', price: '$22', description: 'Adjustable black cap with embroidered red logo.', icon: 'cap' },
  { name: 'Dugout T-Shirt', price: '$20', description: 'Soft cotton tee — perfect for parents and fans in the stands.', sizes: 'Youth S–XL, Adult S–3XL', icon: 'shirt' },
  { name: 'Equipment Backpack', price: '$45', description: 'Bat pack with helmet holder and Lady Reds embroidery.', tag: 'New', icon: 'bag' },
  { name: 'Car Decal', price: '$8', description: 'Weatherproof vinyl decal — show your Lady Reds pride on the road.', icon: 'decal' },
  { name: 'Stadium Blanket', price: '$30', description: 'Warm fleece blanket for chilly tournament mornings.', icon: 'blanket' },
  { name: 'Fan Bundle', price: '$65', description: 'T-shirt, cap, and decal bundled together — save $15.', tag: 'Save $15', icon: 'shirt' },
]

export type SponsorTier = {
  name: string
  price: string
  color: string
  perks: string[]
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: 'Home Run Sponsor',
    price: '$1,000',
    color: 'border-amber-400',
    perks: ['Large logo on team banner at every tournament', 'Logo & link on team website', 'Social media shout-outs all season', 'Team photo plaque', 'Logo on warm-up shirts'],
  },
  {
    name: 'Grand Slam Sponsor',
    price: '$500',
    color: 'border-red-500',
    perks: ['Logo on team banner', 'Logo & link on team website', 'Social media shout-outs', 'Team photo plaque'],
  },
  {
    name: 'Base Hit Sponsor',
    price: '$250',
    color: 'border-neutral-500',
    perks: ['Name on team banner', 'Name listed on team website', 'Social media thank-you'],
  },
  {
    name: 'Friend of the Reds',
    price: '$100',
    color: 'border-neutral-700',
    perks: ['Name listed on team website', 'Social media thank-you'],
  },
  {
    name: 'Custom Amount',
    price: 'Any',
    color: 'border-white',
    perks: ['Give whatever fits your budget — every dollar helps', 'Name listed on team website', 'Social media thank-you'],
  },
]

export const currentSponsors = [
  // Replace with real sponsor names/logos as they sign on.
  { name: 'Your Business Here', tier: 'Home Run Sponsor' },
  { name: 'Your Business Here', tier: 'Grand Slam Sponsor' },
  { name: 'Your Business Here', tier: 'Base Hit Sponsor' },
  { name: 'Your Business Here', tier: 'Friend of the Reds' },
]

export const storeUrl = 'https://shop.smalltownadvertising.com/collections/lady-reds-softball'

export const sponsorNote = 'Sponsorships help cover tournament entry fees, equipment, and uniforms — keeping costs low for our families. All sponsors receive a receipt for tax purposes.'

export type Tournament = {
  name: string
  date: string
  location: string
  format: string
  status: 'Upcoming' | 'Registered' | 'Champions' | 'Completed'
  result?: string
}

export const tournaments: Tournament[] = [
  {
    name: 'Brawl 4 It All — Texas Championship Softball Tournament',
    date: 'Saturday, August 15, 2026',
    location: 'Victoria Youth Softball Complex, Victoria, TX',
    format: '4-game guarantee · 8 teams per division · 1st–3rd place awards',
    status: 'Registered',
  },
  { name: 'More tournaments coming soon', date: 'Fall 2026', location: 'TBD', format: 'Stay tuned — schedule announced on Facebook', status: 'Upcoming' },
]
