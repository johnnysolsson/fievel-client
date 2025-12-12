
export interface Profile {
  name: string;
  role: string;
  imageSrc: string;
  tags: string[];
  isPaused?: boolean;
}

export type CardItem = {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
};
