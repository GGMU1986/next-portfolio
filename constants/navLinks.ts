import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";

export const NAV_LINKS = [
  {
    path: '/',
    icon: IoHome,
    text: 'Home'
  },
  {
    path: '/timeline',
    icon: RiTimeLine,
    text: 'Timeline'
  },
  {
    path: '/my-skills',
    icon: BsTools,
    text: 'Skills'
  },
  {
    path: '/gallery',
    icon: FaCameraRetro,
    text: 'Gallery'
  },
]