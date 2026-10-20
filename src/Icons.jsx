export default function Icon({ name, size = 20, className = '', ...props }) {
  const paths = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c6 6 6 12 0 18-6-6-6-12 0-18" /></>,
    chat: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 10 10 0 0 1-4-.8L3 21l1.8-5.5a8.5 8.5 0 1 1 16.2-4Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.8M16 3.2a4 4 0 0 1 0 7.6" /><circle cx="9" cy="7" r="4" /></>,
    book: <><path d="M12 5C8 2 3 3 2 4v16c3-2 7-1 10 1 3-2 7-3 10-1V4c-3-2-7-1-10 1Zm0 0v16" /></>,
    headphones: <><path d="M3 14v-3a9 9 0 0 1 18 0v3" /><rect x="3" y="12" width="4" height="8" rx="2" /><rect x="17" y="12" width="4" height="8" rx="2" /></>,
    sound: <><path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /></>,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    quote: <><path d="M10 5H4v7h5c0 4-2 5-5 6m16-13h-6v7h5c0 4-2 5-5 6" /></>,
    external: <><path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>
}
