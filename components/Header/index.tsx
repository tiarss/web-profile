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
    <div className="fixed top-0  w-full py-[40px]">
      <ul className="flex justify-center align-middle gap-[70px]">
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