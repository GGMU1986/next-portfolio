export type ImageArray = {
  path: string;
  title: string;
  time: string;
  text: string | undefined;
};

export type ModalData = {
  id: number;
  type: string;
  title: string;
  company: string;
  place: string;
  date: string;
  bullets?: string[];
  pics?: ResumePicture[];
  classesTaken?: string;
};

export type ResumePicture = {
  id: number;
  path: string;
  alt: string;
  tab: string;
  description: string;
};

export type Skill = {
  image: string;
  alt: string;
};

export type SelfImage = {
  src: string;
  alt: string;
};

export type SkillImage = {
  src: string;
  className: string;
  title: string;
}
