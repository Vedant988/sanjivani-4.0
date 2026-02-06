import React from "react";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  channelUrl?: string;
  channelName?: string;
  /** Optional list of YouTube video IDs to embed. If empty, links to the channel are shown. */
  videoIds?: string[];
};

const YouTubeChannel: React.FC<Props> = ({
  channelUrl = "https://www.youtube.com/@team_sanjivani_4.0",
  channelName = "SANJIVANI 4.0",
  videoIds = [],
}) => {
  const videosToShow = videoIds.slice(0, 4);

  return (
    <section className="py-20 bg-card-gradient border-t border-border" aria-label="YouTube channel">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Watch On Our YouTube Channel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Subscribe to our channel for project demos, build videos and competition highlights.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 p-6 rounded-2xl bg-background border border-border flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                <Youtube size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{channelName}</h3>
                <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent text-sm inline-flex items-center gap-2">
                  Visit channel <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">Subscribe for the latest videos on our projects, field tests, and workshops.</p>

            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              aria-label="Subscribe to our YouTube channel"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                  Subscribe on YouTube
                </a>
              </Button>
            </a>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videosToShow.length > 0 ? (
              videosToShow.map((id) => (
                <div key={id} className="rounded-lg overflow-hidden bg-black">
                  <iframe
                    title={`YouTube video ${id}`}
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))
            ) : (
              // If no video IDs provided, show channel links/placeholders
              Array.from({ length: 4 }).map((_, i) => (
                <a
                  key={i}
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg overflow-hidden border border-border p-6 flex items-center justify-center hover:shadow-sm transition"
                >
                  <div className="text-center">
                    <div className="w-28 h-16 bg-primary/10 rounded mb-3 flex items-center justify-center">
                      <Youtube size={28} className="text-red-600" />
                    </div>
                    <div className="text-sm text-muted-foreground">Visit our channel for videos</div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannel;
