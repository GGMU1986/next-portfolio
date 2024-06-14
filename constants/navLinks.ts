import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { BsTools } from 'react-icons/bs';
import { FaCameraRetro } from 'react-icons/fa';
import { LiaDrumSolid } from 'react-icons/lia';

export const NAV_LINKS = [
  {
    id: 1,
    path: '/',
    icon: IoHome,
    text: 'Home',
  },
  {
    id: 2,
    path: '/timeline',
    icon: RiTimeLine,
    text: 'Timeline',
  },
  {
    id: 3,
    path: '/skills',
    icon: BsTools,
    text: 'Skills',
  },
  {
    id: 4,
    path: '/gallery',
    icon: FaCameraRetro,
    text: 'Gallery',
  },
  {
    id: 5,
    path: '/drums',
    icon: LiaDrumSolid,
    text: 'Drums',
  },
];
