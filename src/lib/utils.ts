
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
        const urlObj = new URL(url);
        let videoId;
        if (urlObj.hostname === 'youtu.be') {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname.includes('youtube.com')) {
            videoId = urlObj.searchParams.get('v');
        } else if (urlObj.hostname.includes('yogajournal.com')) {
            return null; // Don't embed yogajournal pages
        }
        
        if (videoId) {
            const params = new URLSearchParams(urlObj.search);
            params.delete('v');
            return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
        }
    } catch (e) {
        console.error("Invalid video URL", e);
    }
    return '';
};
