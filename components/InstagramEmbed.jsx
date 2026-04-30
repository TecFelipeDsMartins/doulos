"use client";

import React, { useEffect, useRef, useState } from "react";

export default function InstagramEmbed({
  postUrl = "https://www.instagram.com/p/DXuUa48gDWL/",
  captioned = true,
  maxWidth = 540,
  className,
  style,
}) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Load Instagram script if not already present
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // If script is already loaded, process the new embed
      window.instgrm.Embeds.process();
    }
  }, [mounted, postUrl, captioned]);

  // Prevent SSR rendering issues
  if (!mounted) return null;

  // Clean up the URL to ensure it ends with /
  const cleanUrl = postUrl.endsWith("/") ? postUrl : `${postUrl}/`;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minWidth: "326px",
        maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
        margin: "0 auto",
        ...style,
      }}
      ref={containerRef}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned={captioned ? "" : undefined}
        data-instgrm-permalink={cleanUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={cleanUrl}
            style={{
              background: "#FFFFFF",
              lineHeight: "0",
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Placeholder during loading */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "40px", marginRight: "14px", width: "40px" }}></div>
              <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", marginBottom: "6px", width: "100px" }}></div>
                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", width: "60px" }}></div>
              </div>
            </div>
            <div style={{ padding: "19% 0" }}></div>
            <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "550", lineHeight: "18px" }}>
              Ver essa foto no Instagram
            </div>
          </a>
        </div>
      </blockquote>
    </div>
  );
}
