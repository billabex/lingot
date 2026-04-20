import { Badge } from "../components/badge";

/**
 * Shared status vocabulary for connections (e.g. Pennylane, Zoho Books) —
 * keeps the Settings > Connexions row badge and the Connection Detail View
 * StatCard in sync as new statuses appear.
 */
export type ConnectionStatus = "active" | "error" | "incomplete";

export function connectionStatusBadge(status: ConnectionStatus) {
  if (status === "active") return <Badge variant="success">Active</Badge>;
  if (status === "incomplete")
    return <Badge variant="warning">Incomplète</Badge>;
  return <Badge variant="error">Erreur</Badge>;
}
