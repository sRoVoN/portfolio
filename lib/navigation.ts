// lib/navigation.ts

export  async function getNavLinks (locale: string){
  return [
  { href: `/${locale}`, labelKey: 'home' },
  { href: `/${locale}/about`, labelKey: 'about' },
  { href: `/${locale}/projects`, labelKey: 'projects' },
  { href: `/${locale}/contact`, labelKey: 'contact' },
];
} 
