export interface SectionProps {
    image: {
      src: string;
    };
    title: string;
    text: string;
    flip?: boolean;
}
  
export interface TrainCardProps {
    name: string;
    path: string;
    imageUrl: string;
    onClick: (path: string) => void;
}

export interface TrainListProps {
    trains: { name: string; path: string; imageUrl: string }[];
    onTrainClick: (path: string) => void;
}