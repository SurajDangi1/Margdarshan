export interface BlogFrontMatter {
  title: string;
  isFemaleOnly:string;
  description: string;
  minutesToRead?: number;
  heroBackgroundColor?: string;
  tags: string[];
  featuredMain?: boolean;
  featuredSecondary?: boolean;
  featuredStory?: boolean;
  featuredRow1?: boolean;
  featuredRow2?: boolean;
  pressAndAwardsPrimary?: boolean;
  pressAndAwardsSecondary?: boolean;
  insuranceAndBeyondSection?: boolean;
  slug?: string;
  pressArticleLinkLabel?: string;
  pressArticleLink?: string;
  imageName?: string;
  lottieFileLink?: string;
  youtubeIds?: string[];
  author?: {
    name: string;
    mail: string;
  };
  mode?: "dark" | "light";
  date: string;
  heroTextColor?: string;
  startDate: string;
  endDate: string;
}
