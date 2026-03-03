"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface FormEmbedProps {
  /** The full iframe src URL */
  src: string;
  /** Unique form/booking ID */
  formId: string;
  /** Initial height of the embed in pixels */
  height: number;
  /** Title for accessibility */
  title: string;
  /** Whether this is a booking widget or form */
  type?: "form" | "booking";
}

/**
 * Embeds a form or booking calendar via iframe.
 * Loads the embed script and auto-resizes based on content.
 */
export function FormEmbed({
  src,
  formId,
  height,
  title,
  type = "form",
}: FormEmbedProps) {
  const iframeId =
    type === "form"
      ? `inline-${formId}`
      : `3D3ER21e415TMQ5kSz9X_${formId}`;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(height);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!event.data || typeof event.data !== "object") return;

      const data = event.data;

      // GHL sends resize messages in various formats
      if (
        data.type === "resize" ||
        data.action === "resize" ||
        data.eventName === "resize"
      ) {
        const newHeight =
          data.height || data.data?.height || data.payload?.height;
        if (typeof newHeight === "number" && newHeight > 100) {
          setIframeHeight(newHeight);
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        src={src}
        id={iframeId}
        title={title}
        className="w-full rounded border-none"
        style={{ height: `${iframeHeight}px` }}
        {...(type === "form"
          ? {
              "data-layout": "{'id':'INLINE'}",
              "data-trigger-type": "alwaysShow",
              "data-trigger-value": "",
              "data-activation-type": "alwaysActivated",
              "data-activation-value": "",
              "data-deactivation-type": "neverDeactivate",
              "data-deactivation-value": "",
              "data-form-name": title,
              "data-height": String(height),
              "data-layout-iframe-id": iframeId,
              "data-form-id": formId,
            }
          : {})}
      />
      <Script
        src="https://link.tattooagent.art/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
