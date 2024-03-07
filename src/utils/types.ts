import { type ReactNode } from 'react';

export interface INewGoal {
  onAddGoal: (goal: string, summary: string) => void;
}

export interface ICourseGoal {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

export interface ICourseGoalList {
  id: number;
  title: string;
  description: string;
}

export interface ICourseGoalListProps {
  goals: ICourseGoalList[];
  onDelete: (id: number) => void;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IHeader {
  image: IImage;
  children: ReactNode;
}

export interface WarningBoxProps {
  mode: 'hint' | 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}

export interface HintBoxProps {
  mode: 'hint';
  children: ReactNode;
}

export type InfoBoxProps = WarningBoxProps | HintBoxProps;
