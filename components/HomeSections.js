"use client";

import React from "react";

export default function HomeSections() {
  return (
    <>
      {/* Videos Section */}
      <section className="home-video overflow-hidden">
        <div className="container">
          <h2>Videos</h2>
          <div className="row gx-5 gy-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <video
                className="img-fluid"
                src="https://www.nexgenguest.com/wp-content/uploads/2025/03/NexGen-Guest.mp4"
                controls
                preload="metadata"
                controlsList="nodownload"
                poster="/images/video-1.jpg"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <video
                className="img-fluid"
                src="https://www.nexgenguest.com/wp-content/uploads/2025/03/NexGen-Guest.mp4"
                controls
                preload="metadata"
                controlsList="nodownload"
                poster="/images/video-2.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="home-insta overflow-hidden">
        <div className="container">
          <h2>Join the Spotlight</h2>
          <p>
            Tag <strong>@avyyaoffical</strong> in your Instagram photos for a chance to be featured here.
          </p>
          <div className="row gx-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                <img src="/images/insta-1.webp" className="img-fluid" alt={`Insta ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avyya Section */}
      <section className="why-avyya">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-12">
              <h2>WHY AVYYA?</h2>
              <div className="row why-avyya-icon">
                {["/images/why-1.png","/images/why-2.png","/images/why-3.png","/images/why-4.png"].map((src, i) => (
                  <div key={i} className="col-3">
                    <img src={src} alt="Why Avyya" className="img-fluid" />
                  </div>
                ))}
              </div>
              <img src="/images/why-avyya.webp" alt="Why Avyya" className="img-fluid why-avyya-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
