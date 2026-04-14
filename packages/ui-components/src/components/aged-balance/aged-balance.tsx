import type { HTMLAttributes, ReactNode } from "react";
import {
  agedBalanceRecipe,
  agedBalanceTotalRecipe,
  agedBalanceBarRecipe,
  agedBalanceSegmentRecipe,
  agedBalanceLegendRecipe,
  agedBalanceLegendItemRecipe,
  agedBalanceLegendSwatchRecipe,
  type AgedBalanceTone,
} from "./aged-balance.recipe";

export interface AgedBalanceBucket {
  /** Semantic tone for this aging bucket */
  tone: AgedBalanceTone;
  /** Legend label (e.g. "30-60j", "60-90j") */
  label: ReactNode;
  /**
   * Relative weight of this bucket. Segments are sized from the
   * proportion of each value against the sum of all bucket values —
   * pass raw amounts or percentages; both work.
   */
  value: number;
}

export interface AgedBalanceProps extends HTMLAttributes<HTMLDivElement> {
  /** Pre-formatted total (e.g. `"16 200 €"`). Consumer controls formatting. */
  total: ReactNode;
  /** Aged balance buckets, rendered in order as bar segments + legend items. */
  buckets: AgedBalanceBucket[];
}

/**
 * AgedBalance — Overdue aged-balance summary.
 *
 * Displays a total amount, a segmented bar proportional to each bucket,
 * and a legend. Consumer controls amount formatting and bucket ordering.
 * RSC-compatible (no `'use client'` needed).
 */
export function AgedBalance({ total, buckets, className, ...props }: AgedBalanceProps) {
  const sum = buckets.reduce((acc, b) => acc + Math.max(b.value, 0), 0);
  const isEmpty = sum === 0;

  return (
    <div className={`${agedBalanceRecipe({})}${className ? ` ${className}` : ""}`} {...props}>
      <div className={agedBalanceTotalRecipe({})}>{total}</div>

      <div className={agedBalanceBarRecipe({})} role="presentation">
        {isEmpty ? (
          <div className={agedBalanceSegmentRecipe({ tone: "neutral" })} style={{ width: "100%" }} />
        ) : (
          buckets.map((bucket, i) => {
            const pct = (Math.max(bucket.value, 0) / sum) * 100;
            if (pct === 0) return null;
            return (
              <div
                key={i}
                className={agedBalanceSegmentRecipe({ tone: bucket.tone })}
                style={{ width: `${pct}%` }}
              />
            );
          })
        )}
      </div>

      {buckets.length > 0 && (
        <div className={agedBalanceLegendRecipe({})}>
          {buckets.map((bucket, i) => (
            <span key={i} className={agedBalanceLegendItemRecipe({})}>
              <span
                className={agedBalanceLegendSwatchRecipe({ tone: bucket.tone })}
                aria-hidden="true"
              />
              {bucket.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
