export interface SingleWork {
  previewClips: { asset: { url: string } }[];
}

export interface VideoRowPocProps {
  video: {
    client: string;
    title: string;
    category: string;
    date: string;
    clips: string[];
    description: string;
    id: number;
    source: string;
    videoId: number;
    award?: {
      title: string;
      won: boolean;
      url: string;
    };
  };
  priority?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

export interface InfoProps {
  line1: string;
  line2: string;
  onClick?: () => void;
  mobile?: boolean;
  left?: boolean;
  line3?: string;
  awardUrl?: string;
}
