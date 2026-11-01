import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Las Vegas & Henderson Neighborhood Guides | Dr. Jan Duffy',
  description:
    'Browse Dr. Jan Duffy’s Las Vegas and Henderson neighborhood guides: Summerlin, The Ridges, Red Rock Country Club, Southern Highlands, Green Valley, Anthem and more.',
  alternates: {
    canonical: 'https://lasvegashomeexpert.com/neighborhoods',
  },
};

const neighborhoods = [
  { name: 'Summerlin', href: '/neighborhoods/summerlin-homes' },
  { name: 'The Ridges (Summerlin)', href: '/neighborhoods/the-ridges-summerlin' },
  { name: 'The Ridges homes for sale', href: '/neighborhoods/the-ridges-summerlin-homes' },
  { name: 'Red Rock Country Club', href: '/neighborhoods/red-rock-country-club' },
  {
    name: 'Red Rock Country Club homes for sale',
    href: '/neighborhoods/red-rock-country-club-homes',
  },
  { name: 'Tournament Hills', href: '/neighborhoods/tournament-hills-homes' },
  { name: 'Southern Highlands', href: '/neighborhoods/southern-highlands-homes' },
  { name: 'Henderson', href: '/neighborhoods/henderson-homes' },
  { name: 'Green Valley', href: '/neighborhoods/green-valley-homes' },
  { name: 'Anthem', href: '/neighborhoods/anthem-homes' },
  { name: "Mountain's Edge", href: '/neighborhoods/mountains-edge' },
  { name: 'Sun City communities', href: '/neighborhoods/sun-city-communities' },
  { name: 'Del Webb communities', href: '/neighborhoods/del-webb-communities' },
  { name: 'Downtown Las Vegas', href: '/neighborhoods/downtown-las-vegas' },
];

export default function NeighborhoodsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">
        Las Vegas &amp; Henderson Neighborhood Guides
      </h1>
      <p className="mb-10 text-lg text-gray-700">
        Pick a neighborhood to see its homes, amenities and market notes from Dr. Jan Duffy.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {neighborhoods.map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              className="block rounded-lg border border-gray-200 p-5 font-semibold text-blue-700 hover:border-blue-400 hover:text-blue-900"
            >
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-gray-700">
        Not sure where to start?{' '}
        <Link href="/contact" className="font-semibold text-blue-700 hover:text-blue-900">
          Contact Dr. Jan Duffy
        </Link>
        .
      </p>
    </main>
  );
}
