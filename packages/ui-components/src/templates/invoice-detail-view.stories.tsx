import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "styled-system/css";
import {
  CheckCircle2,
  Download,
  MessageCircleMore,
  NotebookTabs,
  Pencil,
  Trash2,
} from "lucide-react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { DetailNav } from "../components/detail-nav";
import { Divider } from "../components/divider";
import { DropdownItem } from "../components/dropdown";
import { InfoRow } from "../components/info-row";
import { NavItem } from "../components/nav-item";
import { OverflowMenu } from "../components/overflow-menu";
import { PageHeader } from "../components/page-header";
import { Sidebar } from "../components/sidebar";
import { StatCard, StatCardGroup } from "../components/stat-card";
import { logoTile, shellDoc, shellDocInner, shellMain, shellPage, shellRail } from "./_shell";

type InvoiceSource = "connector" | "manual";

const meta = {
  title: "Templates/Invoice Detail View",
  component: InvoiceDetailViewTemplate,
  parameters: { layout: "fullscreen" },
  tags: [],
  args: { source: "connector" satisfies InvoiceSource },
} satisfies Meta<typeof InvoiceDetailViewTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ManualImport: Story = {
  args: { source: "manual" },
};

const statGroupWrap = css({ marginBlock: "lg" });

const detailGrid = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3xl",
});

const detailCol = css({
  display: "flex",
  flexDirection: "column",
  gap: "md",
});

const dangerValue = css({ color: "status.error", fontWeight: "semibold" });

const totalValue = css({ fontWeight: "semibold" });

const actionsWrap = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "sm",
});

interface InvoiceDetailViewTemplateProps {
  source?: InvoiceSource;
}

function InvoiceDetailViewTemplate({
  source = "connector",
}: InvoiceDetailViewTemplateProps) {
  const sourceValue = (
    <Badge variant="neutral">
      {source === "connector" ? "Pennylane" : "Aucune"}
    </Badge>
  );

  return (
    <div className={shellPage}>
      <div className={shellRail}>
        <Sidebar
          header={
            <button
              type="button"
              className={logoTile}
              aria-label="Changer d'entreprise"
              aria-haspopup="menu"
            >
              B
            </button>
          }
        >
          <NavItem variant="icon" aria-label="Tâches">
            <CheckCircle2 size={16} />
          </NavItem>
          <NavItem variant="icon" aria-label="Communications">
            <MessageCircleMore size={16} />
          </NavItem>
          <NavItem variant="icon" active aria-label="Comptes clients">
            <NotebookTabs size={16} />
          </NavItem>
        </Sidebar>
      </div>

      <div className={shellMain}>
        <div className={shellDoc}>
          <div className={shellDocInner}>
            <PageHeader
              breadcrumb={[
                { label: "DOSFARMASHOP ONLINE S.L.", href: "#" },
                { label: "INV-2066639" },
              ]}
              title="Facture INV-2066639"
              actions={
                <div className={actionsWrap}>
                  <Button
                    variant="secondary"
                    size="small"
                    leftIcon={<Download size={14} />}
                  >
                    Télécharger le PDF
                  </Button>
                  {source === "manual" && (
                    <OverflowMenu label="Plus d'actions">
                      <DropdownItem leftIcon={<Pencil size={16} />}>
                        Mettre à jour le montant payé
                      </DropdownItem>
                      <Divider />
                      <DropdownItem leftIcon={<Trash2 size={16} />}>
                        Supprimer la facture
                      </DropdownItem>
                    </OverflowMenu>
                  )}
                </div>
              }
            />

            <DetailNav
              current={1}
              total={4}
              prevLabel="Précédent"
              nextLabel="Suivant"
            />

            <div className={statGroupWrap}>
              <StatCardGroup>
                <StatCard label="Statut de la facture">
                  <Badge variant="error">En retard</Badge>
                </StatCard>
                <StatCard label="Statut du paiement">
                  <Badge variant="error">Non payé</Badge>
                </StatCard>
                <StatCard label="Montant total">8 100,00 €</StatCard>
                <StatCard label="Solde restant">
                  <span className={dangerValue}>8 100,00 €</span>
                </StatCard>
              </StatCardGroup>
            </div>

            <div className={detailGrid}>
              <div className={detailCol}>
                <InfoRow label="Date d'émission" value="10/01/2026" />
                <InfoRow label="Date d'échéance" value="10/01/2026" />
                <InfoRow label="Sous-total" value="6 750,00 €" />
                <InfoRow label="Montant des taxes" value="1 350,00 €" />
                <InfoRow
                  label="Montant total"
                  value={<span className={totalValue}>8 100,00 €</span>}
                />
                <InfoRow label="Montant payé" value="0,00 €" />
                <InfoRow label="Montant du crédit" value="0,00 €" />
                <Divider />
                <InfoRow
                  label="Solde restant"
                  value={<span className={dangerValue}>8 100,00 €</span>}
                />
              </div>

              <div className={detailCol}>
                <InfoRow label="Source" value={sourceValue} />
                <InfoRow label="N° de bon de commande" value="—" />
                <InfoRow label="Compte" value="DOSFARMASHOP ONLINE S.L." />
                <InfoRow label="Devise" value="EUR" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
