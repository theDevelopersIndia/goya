import Head from "next/head";
import React, { useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const [canAutoplay, setCanAutoplay] = React.useState(false);
  React.useEffect(() => {
    const video = document.getElementById("videoPlayer");
    if (video) {
      video
        .play()
        .then(() => {})
        .catch((error) => {
          // Autoplay was prevented, handle the error here
          console.error("Autoplay was prevented:", error.message);
        });
    }
  }, [canAutoplay]);
  const handlePlay = () => {
    setCanAutoplay(true);
  };
  return (
    <div className="container">
      <Head>
        <title>Goya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <video
          id="videoPlayer"
          ref={videoRef}
          style={{ maxWidth: "100vw", maxHeight: "100vh" }}
          autoPlay={canAutoplay}
          loop
          playsInline
          onClick={handlePlay}
        >
          <source src="/GoyaLanding.mp4" type="video/mp4" />
        </video>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
