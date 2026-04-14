import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../badge";
import type { BadgeVariant } from "../badge";
import {
  invoiceCardRecipe,
  invoiceCardTopRecipe,
  invoiceCardLeftRecipe,
  invoiceCardRightRecipe,
  invoiceCardRefRecipe,
  invoiceCardAmountRecipe,
  invoiceCardDueRecipe,
  invoiceCardMetaRecipe,
  type InvoiceDueTone,
} from "./invoice-card.recipe";

export interface InvoiceStatus {
  /** Status label (e.g. "En retard", "Émise") */
  label: ReactNode;
  /** Maps to Badge tone */
  tone: BadgeVariant;
}

export interface InvoiceDueDate {
  /** Due date label (e.g. "Éch. 24 jan. 2026") */
  label: ReactNode;
  /** Tone for the due date text. Default is muted. */
  tone?: InvoiceDueTone;
}

export interface InvoiceCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Invoice reference (e.g. "INV-2066639") */
  reference: ReactNode;
  /** Status pill (rendered as Badge with shape="pill") */
  status: InvoiceStatus;
  /** Pre-formatted amount (e.g. "8 100 €") */
  amount: ReactNode;
  /** Due date label + optional tone */
  dueDate?: InvoiceDueDate;
  /** Meta row content (e.g. "Payé : 2 000 €"). Hidden when absent. */
  meta?: ReactNode;
}

/**
 * InvoiceCard — Stacked invoice summary row for account panels.
 *
 * Two-line layout: top row shows reference + status pill (left) and
 * amount + due date (right); optional meta line sits below. Rows stack
 * with a subtle bottom-border separator that drops on the last child.
 * RSC-compatible (no `'use client'` needed).
 */
export function InvoiceCard({
  reference,
  status,
  amount,
  dueDate,
  meta,
  className,
  ...props
}: InvoiceCardProps) {
  return (
    <div className={`${invoiceCardRecipe({})}${className ? ` ${className}` : ""}`} {...props}>
      <div className={invoiceCardTopRecipe({})}>
        <div className={invoiceCardLeftRecipe({})}>
          <span className={invoiceCardRefRecipe({})}>{reference}</span>
          <Badge variant={status.tone} shape="pill">
            {status.label}
          </Badge>
        </div>
        <div className={invoiceCardRightRecipe({})}>
          <span className={invoiceCardAmountRecipe({})}>{amount}</span>
          {dueDate ? (
            <span className={invoiceCardDueRecipe({ tone: dueDate.tone ?? "default" })}>
              {dueDate.label}
            </span>
          ) : null}
        </div>
      </div>
      {meta ? <div className={invoiceCardMetaRecipe({})}>{meta}</div> : null}
    </div>
  );
}
