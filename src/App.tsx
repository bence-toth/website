import { useState, useEffect } from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaTelegramPlane,
  FaNpm,
  FaTwitter,
} from "react-icons/fa";
import "./App.css";
import triangles from "./triangles";
import Triangle from "./Triangle";
import Avatar from "./avatar.jpg";

const App = () => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((800 * event.clientX) / window.innerWidth);
      setMouseY((800 * event.clientY) / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="intro-wrapper">
      <svg className="pattern" viewBox="0 0 800 800" preserveAspectRatio="none">
        {triangles.map((triangle, triangleIndex) => (
          <Triangle
            key={triangleIndex}
            mouseX={mouseX}
            mouseY={mouseY}
            triangle={triangle}
          />
        ))}
      </svg>
      <main>
        <img className="avatar" src={Avatar} alt="" />
        <h1>Bence A. Tóth</h1>
        <p className="tagline">I build software and relationships.</p>
        <hr />
        <p>
          Engineering lead, front-end developer, software architect, mentor,
          teacher, volunteer, OSS advocate, functional programming enthusiast,
          a11y and i18n nerd, CSS ninja.
        </p>
        <p>
          I thrive in teams fueled by the urge to experiment and innovate.
          Always ready to collaborate, teach, learn, and listen. I have high
          moral and ethical sensitivity, I value diversity, honesty, and
          transparency. I take initiative and challenge the status quo. I am
          always eager to reach my full potential, and empower others to do the
          same.
        </p>
        <p>
          I believe that whatever you do, empathy and compassion will go a long
          way. Be a decent human, and everything else will fall in place.
        </p>
        <hr />
        <nav>
          <ul>
            <li>
              <a href="https://github.com/bence-toth">
                <FaGithubAlt />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/~bence.a.toth">
                <FaNpm />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bence_a_toth">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bence-a-toth/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="mailto:tothab@gmail.com">
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default App;
