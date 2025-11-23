import { Youtube, Instagram, Twitter, Linkedin, MessageCircle, Video, Globe, Link, Facebook, CreditCard, User, Sparkles } from 'lucide-react';
import { SocialLink, NewsItem, VideoItem, StatItem } from './types';

export const MEMBERSHIP_LINK = "https://www.youtube.com/@mrryanoficial";
export const SHOW_HALL_OF_FAME = false;

export const STATS: StatItem[] = [
  { id: 1, label: "Suscriptores", value: "17.5", suffix: "K" },
  { id: 2, label: "Visualizaciones", value: "3.8", suffix: "M" },
  { id: 3, label: "Vídeos", value: "1000", prefix: "+" },
  { id: 4, label: "Trayectoria", value: "2013", prefix: "Desde " },
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "🚨 NOTICIAS IA 🚨 NANO BANANA PRO GRATIS? 🤯 | El PLAN SECRETO de Jeff Bezos 💸",
    tag: "Noticias IA",
    date: "Nuevo",
    image: "https://img.youtube.com/vi/bL9EVie6MRI/maxresdefault.jpg",
    url: "https://youtu.be/bL9EVie6MRI"
  },
  {
    id: 2,
    title: "🚨 NOTICIAS IA 🚨: Gemini 3 PRO YA HA SALIDO🔥 | Nano Banana 2 y Veo 4 + TENCENT HunyuanWorld 3D 🌐",
    tag: "Lanzamiento",
    date: "Nuevo",
    image: "https://img.youtube.com/vi/98ZzygvovbA/maxresdefault.jpg",
    url: "https://youtu.be/98ZzygvovbA"
  },
  {
    id: 3,
    title: "🚨 NOTICIAS IA 🚨 GOOGLE lanza CODE WIKI GRATIS 🤯 | La IA que ROMPE MATRIMONIOS 💔",
    tag: "Tecnología",
    date: "Reciente",
    image: "https://img.youtube.com/vi/gXNd25F6QfY/maxresdefault.jpg",
    url: "https://youtu.be/gXNd25F6QfY"
  },
  {
    id: 4,
    title: "🚨 NOTICIAS IA 🚨 Robot NEO de ELON MUSK 🤖 | Algoritmo CUÁNTICO GOOGLE ⚛️ | +1M CHIPS HUAWEI 🤯",
    tag: "Futuro",
    date: "Reciente",
    image: "https://img.youtube.com/vi/h15eqnq3Vjo/maxresdefault.jpg",
    url: "https://youtu.be/h15eqnq3Vjo"
  },
  {
    id: 5,
    title: "🚨 NOTICIAS IA 🚨 SORA 2 es una LOCURA 🤯 | GOOGLE HOME vs ALEXA 💸",
    tag: "Noticias IA",
    date: "Nuevo",
    image: "https://img.youtube.com/vi/_kpeG7QhOHw/maxresdefault.jpg",
    url: "https://youtu.be/_kpeG7QhOHw"
  },
  {
    id: 6,
    title: "🚨 NOTICIAS IA 🚨 El LADO OSCURO de los Agentes IA 🤖 | El GIGANTESCO PRECIO del FUTURO TECNOLÓGICO 🌍",
    tag: "Futuro",
    date: "Nuevo",
    image: "https://img.youtube.com/vi/CDk6cMGrCAk/maxresdefault.jpg",
    url: "https://youtu.be/CDk6cMGrCAk"
  },
  {
    id: 7,
    title: "🚨 NOTICIAS IA 🚨 ROBOTS HUMANOIDES CHINOS 🤖 | El LADO OSCURO de la IA 😨",
    tag: "Robótica",
    date: "Reciente",
    image: "https://img.youtube.com/vi/akF6gLXtULo/maxresdefault.jpg",
    url: "https://youtu.be/akF6gLXtULo"
  },
  {
    id: 8,
    title: "💥 ¡INSTALAR DeepSeek GRATIS en LOCAL! 🖥️ ¡PRIVACIDAD TOTAL con LM Studio! 🔥",
    tag: "Tutorial",
    date: "Reciente",
    image: "https://img.youtube.com/vi/ldSC9NjqaLY/maxresdefault.jpg",
    url: "https://youtu.be/ldSC9NjqaLY"
  }
];

export const POPULAR_VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "La Teoría de la Evolución de Darwin",
    views: "+900K visualizaciones",
    duration: "15:24",
    thumbnail: "https://img.youtube.com/vi/fCZP1iIlYKc/maxresdefault.jpg",
    url: "https://youtu.be/fCZP1iIlYKc"
  },
  {
    id: 2,
    title: "¿Qué es la Paradoja de Schrödinger?",
    views: "+700K visualizaciones",
    duration: "12:10",
    thumbnail: "https://img.youtube.com/vi/ByO2x6VYlUA/maxresdefault.jpg",
    url: "https://youtu.be/ByO2x6VYlUA"
  },
  {
    id: 3,
    title: "La Teoría del Big Bang",
    views: "Especial 1K",
    duration: "25:00",
    thumbnail: "https://img.youtube.com/vi/W4TWLNMeCYE/maxresdefault.jpg",
    url: "https://youtu.be/W4TWLNMeCYE"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Web Portfolio", url: "https://brivaro-portfolio.vercel.app/", icon: Globe, color: "text-neon-cyan", handle: "brivaro-portfolio" },
  { name: "Linktree", url: "https://linktr.ee/mrryan.oficial", icon: Link, color: "text-green-400", handle: "Enlaces Rápidos" },
  { name: "TikTok", url: "https://www.tiktok.com/@mrryanoficial", icon: Video, color: "text-pink-500", handle: "@mrryanoficial" },
  { name: "Twitter/X", url: "https://twitter.com/mrryanoficial", icon: Twitter, color: "text-white", handle: "@mrryanoficial" },
  { name: "WhatsApp", url: "https://whatsapp.com/channel/0029VaBpqqs6rsQp2welrY0c", icon: MessageCircle, color: "text-green-500", handle: "Canal Oficial" },
  { name: "Instagram", url: "https://www.instagram.com/mrryanoficial/", icon: Instagram, color: "text-purple-500", handle: "@mrryanoficial" },
  { name: "Facebook", url: "https://www.facebook.com/mrryan.oficial", icon: Facebook, color: "text-blue-600", handle: "Mr Ryan Oficial" },
  { name: "LinkedIn Canal", url: "https://www.linkedin.com/in/mr-ryan-oficial/", icon: Linkedin, color: "text-blue-400", handle: "Mr Ryan Oficial" },
  { name: "LinkedIn Personal", url: "https://www.linkedin.com/in/brian-valiente-rodenas/", icon: User, color: "text-blue-300", handle: "Brian Valiente" },
  { name: "PayPal", url: "https://paypal.me/MrRyanOficial?locale.x=es_ES", icon: CreditCard, color: "text-blue-700", handle: "Donaciones" },
  { name: "Miembro del Canal", url: "https://www.youtube.com/@mrryanoficial", icon: Sparkles, color: "text-yellow-400", handle: "Ventajas Exclusivas" },
];