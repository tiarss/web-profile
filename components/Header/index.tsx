import Link from "next/link";


const Header: React.FC= () => {

  const MenuList = [
    {
      title: "Home",
      path: "/home"
    },
    {
      title: "Portfolio",
      path: "/portfolio"
    },
    {
      title: "About Me",
      path: "/about-me"
    }
  ]

  return (
    <div className="hidden md:block fixed top-0  w-full py-[40px]">
      <ul className="flex justify-center align-middle gap-[70px] text-slate-800 dark:text-white">
        {MenuList.map((list: {title: string; path: string}) => (
          <Link key={list.title} href={list.path}>
            <li className="text-xl font-medium">
              {list.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Header