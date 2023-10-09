import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons"
import AnimatedHero from "./AnimatedHero"

const Hero: React.FC = () => {

  const linkAboutMe = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/bahtiarsubrata/",
      logo: faLinkedinIn
    },
    {
      title: "Github",
      link: "https://github.com/tiarss",
      logo: faGithub
    },
    {
      title: "Resume",
      link: "comingsoon",
      logo: faNoteSticky
    },
  ]


  return (
    <>
      <AnimatedHero />
      <div className="flex flex-col mt-4">
        <p className="text-m md:text-l">Know more about me:</p>
        <div>
          <ul className="flex gap-4">
            {linkAboutMe.map((item) => (
              <li key={item.title} className="flex items-center gap-2 text-sm mt-1">
                <FontAwesomeIcon icon={item.logo} size="xl"/>
                <Link href={item.link} className="text-m md:text-xl">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero