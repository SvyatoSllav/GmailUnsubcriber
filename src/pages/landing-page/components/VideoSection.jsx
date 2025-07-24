import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setIsPlaying(true);
  };

  const videoFeatures = [
    {
      timestamp: '0:05',
      title: 'Extension Installation',
      description: 'See how quick and easy it is to add InboxPurge to Chrome'
    },
    {
      timestamp: '0:15',
      title: 'Gmail Integration',
      description: 'Watch the seamless connection with your Gmail account'
    },
    {
      timestamp: '0:25',
      title: 'Mass Unsubscribe',
      description: 'Witness hundreds of subscriptions removed in seconds'
    },
    {
      timestamp: '0:35',
      title: 'Bulk Deletion',
      description: 'See thousands of emails organized and deleted by category'
    },
    {
      timestamp: '0:45',
      title: 'Clean Inbox Result',
      description: 'Experience the satisfaction of a perfectly organized inbox'
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            See InboxPurge in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch a real Gmail cleanup transformation in under 60 seconds. 
            See exactly how InboxPurge turns email chaos into organized productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative bg-card rounded-xl overflow-hidden card-shadow">
              {!isVideoLoaded ? (
                <div className="relative">
                  {/* Video Thumbnail */}
                  <img
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop"
                    alt="InboxPurge Gmail cleanup demonstration"
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={handleVideoLoad}
                      className="w-24 h-24 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-250 hover:scale-110"
                    >
                      <Icon name="Play" size={40} color="white" />
                    </button>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 text-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold mb-1">Gmail Cleanup Demo</h4>
                          <p className="text-sm opacity-90">Watch 15,000+ emails get organized in 60 seconds</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm opacity-90">Duration</div>
                          <div className="font-semibold">0:58</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                      ✓ Real Gmail
                    </div>
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Live Demo
                    </div>
                  </div>
                </div>
              ) : (
                /* Video Player Simulation */
                <div className="w-full h-96 bg-muted flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <Icon name="Play" size={64} color="var(--color-primary)" className="mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Video Playing
                    </h4>
                    <p className="text-muted-foreground">
                      Showing real Gmail cleanup process
                    </p>
                  </div>
                  
                  {/* Simulated Progress Bar */}
                  <div className="w-full max-w-md">
                    <div className="bg-border rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full w-1/3 transition-all duration-1000"></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>0:20</span>
                      <span>0:58</span>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="flex items-center space-x-4 mt-6">
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Icon name="Pause" size={20} />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Icon name="Volume2" size={20} />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Icon name="Maximize" size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                <div className="text-2xl font-bold text-primary mb-1">250K+</div>
                <p className="text-sm text-muted-foreground">Video views</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                <div className="text-2xl font-bold text-success mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Completion rate</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                <div className="text-2xl font-bold text-warning mb-1">4.9★</div>
                <p className="text-sm text-muted-foreground">Video rating</p>
              </div>
            </div>
          </div>

          {/* Video Timeline & Features */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 card-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">
                What You'll See
              </h3>
              
              <div className="space-y-4">
                {videoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-primary">
                        {feature.timestamp}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">
                Ready to Experience This Yourself?
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Install InboxPurge and start your own cleanup transformation in the next 2 minutes.
              </p>
              <Button
                variant="default"
                fullWidth
                iconName="Download"
                iconPosition="left"
              >
                Install Extension Now
              </Button>
            </div>

            {/* Social Proof */}
            <div className="bg-card border border-border rounded-lg p-6 card-shadow">
              <h4 className="font-semibold text-foreground mb-4">
                What Viewers Say
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Sarah M."
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      "This video convinced me to try it. Best decision ever!"
                    </p>
                    <span className="text-xs text-muted-foreground">Sarah M.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Mike R."
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      "Exactly what happened to my inbox. Amazing results!"
                    </p>
                    <span className="text-xs text-muted-foreground">Mike R.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <span className="text-sm text-muted-foreground">Share this demo:</span>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Icon name="Share2" size={16} />
              </button>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <Icon name="Link" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;