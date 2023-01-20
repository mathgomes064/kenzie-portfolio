import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython, FaGitAlt } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si"
import { DiScrum } from "react-icons/di"

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  {title: "Django", img: SiDjango},
  {title: "Git", img: FaGitAlt},
  {title: "Scrum", img: DiScrum}

];
