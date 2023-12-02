export default function MainNavigation() {
  return (
    <nav className='flex h-12 w-full items-center justify-center gap-10'>
      <NavigationItem label='My Projects' link='#my-projects' />
      <NavigationItem label='Skills' link='#skills' />
      <NavigationItem label='Experience' link='#experience' />
      <NavigationItem label='Support Me' link='#support-me' />
      <NavigationItem label='Contact & Policy' link='#contact-and-privacy' />
    </nav>
  );
}

function NavigationItem(props: {label: string; link: string}) {
  return (
    <a href={props.link} className='group relative px-3 py-2 text-white'>
      <div className='inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-[250ms] after:ease-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100'>
        {props.label}
      </div>
    </a>
  );
}
