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
      link: "https://drive.google.com/file/d/1aE9QKcEy4h86EQvcE55cibtA5SNUQj44/view?usp=sharing",
      logo: faNoteSticky
    },
  ]


  return (
    <>
      <AnimatedHero />
      <div className="flex flex-col md:mt-4 2xl:mt-0">
        <p className="text-m md:text-[24px] 2xl:text-[42px] text-slate-800 dark:text-white">Know more about me:</p>
        <div>
          <ul className="flex gap-4">
            {linkAboutMe.map((item) => (
              <li key={item.title} className="flex items-center gap-2 text-sm mt-1">
                <FontAwesomeIcon icon={item.logo} size="xl" className="text-slate-800 dark:text-white" />
                <a href={item.link} className="text-m md:text-xl text-slate-800 dark:text-white">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero