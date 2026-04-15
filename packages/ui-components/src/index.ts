// ---------------------------------------------------------------------------
// @billabex/ui-components — Public API
// ---------------------------------------------------------------------------

// ActionBar
export { ActionBar } from "./components/action-bar";
export type { ActionBarProps, ActionBarAlign } from "./components/action-bar";
export { actionBarRecipe } from "./components/action-bar";

// Badge
export { Badge } from "./components/badge";
export type { BadgeProps, BadgeVariant, BadgeShape } from "./components/badge";
export { badgeRecipe } from "./components/badge";

// Banner
export { Banner } from "./components/banner";
export type { BannerProps, BannerVariant } from "./components/banner";
export { bannerRecipe } from "./components/banner";

// Breadcrumb
export { Breadcrumb } from "./components/breadcrumb";
export type { BreadcrumbProps, BreadcrumbItem } from "./components/breadcrumb";
export { breadcrumbRecipe } from "./components/breadcrumb";

// Button
export { Button } from "./components/button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/button";
export { buttonRecipe } from "./components/button";

// Bubble
export { Bubble } from "./components/bubble";
export type { BubbleProps, BubbleSide } from "./components/bubble";
export { bubbleRecipe } from "./components/bubble";

// BubbleGroup
export { BubbleGroup } from "./components/bubble";
export type { BubbleGroupProps } from "./components/bubble";
export {
  bubbleGroupRecipe,
  bubbleGroupStackRecipe,
  bubbleGroupHeaderRecipe,
  bubbleGroupAuthorRecipe,
  bubbleGroupDateRecipe,
} from "./components/bubble";

// BubbleAttachment
export { BubbleAttachment } from "./components/bubble";
export type { BubbleAttachmentProps } from "./components/bubble";
export {
  bubbleAttachmentRecipe,
  bubbleAttachmentGroupRecipe,
  bubbleAttachmentIconRecipe,
  bubbleAttachmentNameRecipe,
} from "./components/bubble";

// BubbleAttachmentGroup
export { BubbleAttachmentGroup } from "./components/bubble";
export type { BubbleAttachmentGroupProps } from "./components/bubble";

// Card
export { Card } from "./components/card";
export type { CardProps, CardVariant } from "./components/card";
export { cardRecipe } from "./components/card";
// Checkbox
export { Checkbox } from "./components/checkbox";
export type { CheckboxProps } from "./components/checkbox";
export { checkboxRecipe, checkboxInputRecipe } from "./components/checkbox";

// Divider
export { Divider } from "./components/divider";
export type { DividerProps, DividerOrientation } from "./components/divider";
export { dividerRecipe } from "./components/divider";

// DropdownItem
export { DropdownItem } from "./components/dropdown";
export type { DropdownItemProps } from "./components/dropdown";
export { dropdownItemRecipe } from "./components/dropdown";

// DropdownMenu
export { DropdownMenu } from "./components/dropdown";
export type { DropdownMenuProps } from "./components/dropdown";
export { dropdownMenuRecipe } from "./components/dropdown";

// EmptyState
export { EmptyState } from "./components/empty-state";
export type { EmptyStateProps, EmptyStateVariant } from "./components/empty-state";
export {
  emptyStateRecipe,
  emptyStateIconRecipe,
  emptyStateTitleRecipe,
  emptyStateDescriptionRecipe,
} from "./components/empty-state";

// Chip
export { Chip } from "./components/chip";
export type { ChipProps, ChipVariant } from "./components/chip";
export { chipRecipe, chipRemoveRecipe } from "./components/chip";

// ChipGroup
export { ChipGroup } from "./components/chip";
export type { ChipGroupProps } from "./components/chip";
export { chipGroupRecipe } from "./components/chip";

// FormField
export { FormField } from "./components/form-field";
export type { FormFieldProps } from "./components/form-field";
export {
  formFieldRecipe,
  formFieldLabelRecipe,
  formFieldHelperRecipe,
} from "./components/form-field";

// IconButton
export { IconButton } from "./components/icon-button";
export type { IconButtonProps, IconButtonSize } from "./components/icon-button";
export { iconButtonRecipe } from "./components/icon-button";

// InfoRow
export { InfoRow } from "./components/info-row";
export type { InfoRowProps, InfoRowVariant } from "./components/info-row";
export { infoRowRecipe, infoRowLabelRecipe, infoRowValueRecipe } from "./components/info-row";

// Input
export { Input } from "./components/input";
export type { InputProps } from "./components/input";
export { inputRecipe } from "./components/input";

// Link
export { Link } from "./components/link";
export type { LinkProps, LinkVariant, LinkSize } from "./components/link";
export { linkRecipe } from "./components/link";

// ListItem
export { ListItem } from "./components/list-item";
export type { ListItemProps } from "./components/list-item";
export {
  listItemRecipe,
  listItemTitleRowRecipe,
  listItemTitleRecipe,
  listItemTitleTrailingRecipe,
  listItemPreviewRecipe,
  listItemMetaRecipe,
  listItemSubRecipe,
} from "./components/list-item";
// ListPagination
export { ListPagination } from "./components/list-pagination";
export type { ListPaginationProps } from "./components/list-pagination";
export {
  listPaginationRecipe,
  listPaginationInfoRecipe,
  listPaginationButtonRecipe,
} from "./components/list-pagination";

// MessageComposer
export { MessageComposer } from "./components/message-composer";
export type { MessageComposerProps } from "./components/message-composer";
export {
  messageComposerRecipe,
  messageComposerTextareaRecipe,
  messageComposerToolbarRecipe,
  messageComposerSendRecipe,
} from "./components/message-composer";

// Modal
export { Modal } from "./components/modal";
export type { ModalProps } from "./components/modal";
export {
  modalRecipe,
  modalHeaderRecipe,
  modalTitleRecipe,
  modalContentRecipe,
  modalFooterRecipe,
} from "./components/modal";

// NavItem
export { NavItem } from "./components/nav-item";
export type { NavItemProps } from "./components/nav-item";
export { navItemRecipe } from "./components/nav-item";
export type { NavItemVariant } from "./components/nav-item";

// NotificationBadge
export { NotificationBadge } from "./components/notification-badge";
export type { NotificationBadgeProps } from "./components/notification-badge";
export { notificationBadgeRecipe } from "./components/notification-badge";

// PageHeader
export { PageHeader } from "./components/page-header";
export type { PageHeaderProps } from "./components/page-header";
export { pageHeaderRecipe } from "./components/page-header";
// PanelHeader
export { PanelHeader } from "./components/panel-header";
export type {
  PanelHeaderProps,
  PanelHeaderTitleProps,
  PanelHeaderSpacerProps,
  PanelHeaderVariant,
} from "./components/panel-header";
export {
  panelHeaderRecipe,
  panelHeaderTitleRecipe,
  panelHeaderSpacerRecipe,
} from "./components/panel-header";
// SectionTitle
export { SectionTitle } from "./components/section-title";
export type { SectionTitleProps } from "./components/section-title";
export { sectionTitleRecipe, sectionTitleTrailingRecipe } from "./components/section-title";

// Avatar
export { Avatar } from "./components/avatar";
export type { AvatarProps, AvatarSize } from "./components/avatar";
export { avatarRecipe } from "./components/avatar";

// AgedBalance
export { AgedBalance } from "./components/aged-balance";
export type {
  AgedBalanceProps,
  AgedBalanceBucket,
  AgedBalanceTone,
  AgedBalanceSegmentTone,
} from "./components/aged-balance";
export {
  agedBalanceRecipe,
  agedBalanceTotalRecipe,
  agedBalanceBarRecipe,
  agedBalanceSegmentRecipe,
  agedBalanceLegendRecipe,
  agedBalanceLegendItemRecipe,
  agedBalanceLegendSwatchRecipe,
} from "./components/aged-balance";

// InvoiceCard
export { InvoiceCard } from "./components/invoice-card";
export type {
  InvoiceCardProps,
  InvoiceStatus,
  InvoiceDueDate,
  InvoiceDueTone,
} from "./components/invoice-card";
export {
  invoiceCardRecipe,
  invoiceCardTopRecipe,
  invoiceCardLeftRecipe,
  invoiceCardRightRecipe,
  invoiceCardRefRecipe,
  invoiceCardAmountRecipe,
  invoiceCardDueRecipe,
  invoiceCardMetaRecipe,
} from "./components/invoice-card";

// StatusDot
export { StatusDot } from "./components/status-dot";
export type { StatusDotProps, StatusDotSize, StatusDotTone } from "./components/status-dot";
export { statusDotRecipe } from "./components/status-dot";

// Select
export { Select } from "./components/select";
export type { SelectProps } from "./components/select";
export { selectRecipe } from "./components/select";

// Sidebar
export { Sidebar } from "./components/sidebar";
export type { SidebarProps } from "./components/sidebar";
export {
  sidebarRecipe,
  sidebarHeaderRecipe,
  sidebarContentRecipe,
} from "./components/sidebar";
// Stepper
export { Stepper } from "./components/stepper";
export type { StepperProps } from "./components/stepper";
export { stepperRecipe, stepperConnectorRecipe, stepperStepRecipe } from "./components/stepper";
// StepperItem
export { StepperItem } from "./components/stepper";
export type { StepperItemProps, StepperItemState } from "./components/stepper";
export { stepperItemRecipe, stepperCircleRecipe } from "./components/stepper";

// TabItem
export { TabItem } from "./components/tab-item";
export type { TabItemProps } from "./components/tab-item";
export { tabItemRecipe } from "./components/tab-item";

// Tabs
export { Tabs } from "./components/tab-item";
export type { TabsProps } from "./components/tab-item";
export { tabsRecipe } from "./components/tab-item";

// Table
export { Table } from "./components/table";
export type { TableProps, TableDensity } from "./components/table";
export { tableRecipe, tableHeaderRecipe } from "./components/table";
// TableRow
export { TableRow } from "./components/table";
export type { TableRowProps, TableRowAccent } from "./components/table";
export { tableRowRecipe } from "./components/table";
// TableRowDetail
export { TableRowDetail } from "./components/table";
export type { TableRowDetailProps } from "./components/table";
export { tableRowDetailRecipe } from "./components/table";
// TableSortHeader
export { TableSortHeader } from "./components/table";
export type { TableSortHeaderProps, TableSortDirection } from "./components/table";
export { tableSortHeaderRecipe, tableSortIconRecipe } from "./components/table";
// TablePagination
export { TablePagination } from "./components/table-pagination";
export type { TablePaginationProps } from "./components/table-pagination";
export {
  tablePaginationRecipe,
  tablePaginationInfoRecipe,
  tablePaginationControlsRecipe,
  tablePaginationButtonRecipe,
} from "./components/table-pagination";
// Toast
export { Toast } from "./components/toast";
export type { ToastProps, ToastVariant } from "./components/toast";
export { toastRecipe } from "./components/toast";
// Toggle
export { Toggle } from "./components/toggle";
export type { ToggleProps } from "./components/toggle";
export { toggleRecipe, toggleTrackRecipe } from "./components/toggle";

// Tooltip
export { Tooltip } from "./components/tooltip";
export type { TooltipProps } from "./components/tooltip";
export { tooltipRecipe } from "./components/tooltip";
