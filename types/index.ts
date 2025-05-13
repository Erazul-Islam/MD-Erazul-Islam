import { SVGProps } from "react";
import { IconType } from "react-icons";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type SkillItem = {
  skill: string;
  level: number;
  icon: React.ReactElement<IconType>;
};

export type SkillsCategory = {
  frontend: SkillItem[];
  backend: SkillItem[];
  database: SkillItem[];
  languages: SkillItem[];
};

export interface SkillsCardProps {
  skills: SkillsCategory;
}
