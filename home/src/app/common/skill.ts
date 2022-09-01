export interface Skill {
  type: string;
  name: string;
  link: string;
  images: string[];
  icons: { class: string; color: string }[];
  experience: number;
  fun: number;

  hidden?: boolean;
}
