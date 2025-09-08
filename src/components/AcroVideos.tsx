
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getYouTubeEmbedUrl } from '@/lib/utils';

interface AcroVideo {
  title: string;
  url: string;
}

interface AcroVideosProps {
  videos: AcroVideo[];
}

export default function AcroVideos({ videos }: AcroVideosProps) {
  return (
    <div className="space-y-8">
      {videos.map((video, index) => {
        const embedUrl = getYouTubeEmbedUrl(video.url);
        if (!embedUrl) return null;

        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
