import { LucideIcon } from 'lucide-react';

export interface StatItem {
  id: number;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  tag: string;
  date: string;
  image: string;
  url?: string;
}

export interface VideoItem {
  id: number;
  title: string;
  views: string;
  thumbnail: string;
  duration: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  handle: string;
}