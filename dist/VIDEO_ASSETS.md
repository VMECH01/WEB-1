# Video Assets

## demo.mp4
Place your mission/demo video file here. This video will be played in a modal when users click the "Our Mission" button on the hero section.

### Specifications:
- **Format**: MP4 (H.264 video codec, AAC audio)
- **Resolution**: 1920x1080 (16:9 aspect ratio recommended)
- **Duration**: Up to 3 minutes recommended
- **File Size**: Keep under 50MB for optimal loading

### How to add your video:
1. Save your `demo.mp4` file to the `/public` directory
2. The video will automatically be accessible at `/demo.mp4`
3. Test by clicking "Our Mission" button on the home page

### Alternative video sources:
- You can also host the video on a CDN (Cloudflare, AWS S3, Vimeo, YouTube) and update the `videoSrc` prop in `HeroSection.tsx`

### Video Modal Features:
- Autoplay on open
- Looping enabled
- Muted by default (users can unmute)
- Native browser controls
- Responsive design (aspect ratio 16:9)
- Backdrop blur and fade-in animation
- Close button and click-outside-to-close functionality
