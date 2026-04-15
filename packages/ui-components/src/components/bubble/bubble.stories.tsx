import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bubble } from "./bubble";
import { BubbleGroup } from "./bubble-group";
import { BubbleAttachment } from "./bubble-attachment";
import { BubbleAttachmentGroup } from "./bubble-attachment-group";

const meta = {
  title: "Data Display/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "radio",
      options: ["agent", "user"],
      description:
        "Which side of the conversation the bubble belongs to. Agent renders on the left with an inverse background; user renders on the right with a subtle background.",
    },
    children: { control: "text", description: "Bubble content" },
  },
  args: {
    side: "agent",
    children:
      "J'ai analysé le ticket #4190686. Jaime Sánchez conteste 3 factures pour un total de 16 200 €.",
  },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Agent: Story = {};

export const User: Story = {
  args: {
    side: "user",
    children: "Envoyez directement, c'est bon.",
  },
};

export const AgentGroup: Story = {
  render: () => (
    <BubbleGroup side="agent" author="Amelia Miller" date="1 avr. 08:24">
      <Bubble>
        J'ai analysé le ticket #4190686. Jaime Sánchez conteste 3 factures pour
        un total de 16 200 €. Il demande une preuve d'abonnement BREVO.
        Avez-vous les contrats ou confirmations d'abonnement pour DOSFARMASHOP
        ONLINE S.L. ?
      </Bubble>
    </BubbleGroup>
  ),
};

export const UserGroupWithAttachments: Story = {
  render: () => (
    <BubbleGroup side="user" author="Gilles SI" date="1 avr. 09:30">
      <Bubble>
        Voici les contrats pour DOSFARMASHOP. Utilisez-les pour répondre au
        refus de Jaime. L'abonnement était actif de janvier 2024 à décembre
        2025.
        <BubbleAttachmentGroup style={{ marginTop: 8 }}>
          <BubbleAttachment name="Contrat-BREVO-2024.pdf" href="#" />
          <BubbleAttachment name="Confirmation-abonnement.pdf" href="#" />
        </BubbleAttachmentGroup>
      </Bubble>
    </BubbleGroup>
  ),
};

export const Conversation: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <BubbleGroup side="agent" author="Amelia Miller" date="1 avr. 08:24">
        <Bubble>
          J'ai analysé le ticket #4190686. Avez-vous les contrats pour
          DOSFARMASHOP ONLINE S.L. ?
        </Bubble>
      </BubbleGroup>
      <BubbleGroup side="user" author="Gilles SI" date="1 avr. 09:30">
        <Bubble>
          Voici les contrats pour DOSFARMASHOP. L'abonnement était actif de
          janvier 2024 à décembre 2025.
          <BubbleAttachmentGroup style={{ marginTop: 8 }}>
            <BubbleAttachment name="Contrat-BREVO-2024.pdf" href="#" />
            <BubbleAttachment name="Confirmation-abonnement.pdf" href="#" />
          </BubbleAttachmentGroup>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup side="agent" author="Amelia Miller" date="1 avr. 09:45">
        <Bubble>
          Merci pour les documents. J'ai préparé une réponse formelle à Jaime
          incluant le contrat et la confirmation d'abonnement comme preuve. Je
          l'enverrai dans l'heure, sauf si vous souhaitez relire le brouillon
          avant.
        </Bubble>
      </BubbleGroup>
      <BubbleGroup side="user" author="Gilles SI" date="1 avr. 10:10">
        <Bubble>Envoyez directement, c'est bon.</Bubble>
      </BubbleGroup>
    </div>
  ),
};
