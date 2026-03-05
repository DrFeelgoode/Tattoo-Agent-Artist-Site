"use client";

import { useState } from "react";

interface Feature {
  feature: string;
  outcome: string;
}

interface ExpandableFeaturesProps {
  features: Feature[];
  previewCount?: number;
}

export function ExpandableFeatures({
  features,
  previewCount = 4,
}: ExpandableFeaturesProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = features.length > previewCount;
  const visible = expanded ? features : features.slice(0, previewCount);

  return (
    <ul className="mt-4 flex flex-col gap-2">
      {visible.map((f) => (
        <li
          key={f.feature}
          className="flex items-start gap-2 text-base"
        >
          <span className="mt-0.5 text-lime">✓</span>
          <span className="text-cream/80">{f.feature}</span>
        </li>
      ))}
      {hasMore && !expanded && (
        <li>
          <button
            onClick={() => setExpanded(true)}
            className="text-base text-lime transition-colors hover:text-lime/80"
          >
            + {features.length - previewCount} more features ▾
          </button>
        </li>
      )}
      {hasMore && expanded && (
        <li>
          <button
            onClick={() => setExpanded(false)}
            className="text-base text-muted transition-colors hover:text-lime"
          >
            Show less ▴
          </button>
        </li>
      )}
    </ul>
  );
}
