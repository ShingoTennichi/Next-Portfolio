import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <div>
          <a href="https://github.com/ShingoTennichi"><FaGithub size={40} /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/shingo-tennichi/"><FaLinkedin size={40} /></a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Shingo Tennichi</p>
    </div >
  )
}