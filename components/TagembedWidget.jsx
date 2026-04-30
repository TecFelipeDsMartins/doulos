"use client";

import React, { useEffect, useState } from "react";

export default function TagembedWidget({
  widgetId = "212784",
  minHeight = "400px",
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!document.querySelector('script[src*="tagembed"]')) {
      const script = document.createElement("script");
      script.src = "https://widget.tagembed.com/embed.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 🔴 impede render no SSR
  if (!mounted) return null;

  return (
    <div
      className="tagembed-widget"
      data-widget-id={widgetId}
      data-website="1"
      style={{
        width: "100%",
        minHeight: minHeight,
        overflow: "auto",
      }}
    />
  );
}
