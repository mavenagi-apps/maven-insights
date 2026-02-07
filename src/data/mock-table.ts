import type { TableRow, ColumnDefinition } from "@/types/dashboard";

export const mockColumns: ColumnDefinition[] = [
  { key: "col1", label: "Label", sortable: true },
  { key: "col2", label: "Label", sortable: true },
  { key: "col3", label: "Label", sortable: true },
];

export const mockTableRows: TableRow[] = [
  { id: "row-1", cells: ["Cell text", "Cell text", "Cell text"] },
  { id: "row-2", cells: ["Cell text", "Cell text", "Cell text"] },
  { id: "row-3", cells: ["Cell text", "Cell text", "Cell text"] },
  { id: "row-4", cells: ["Cell text", "Cell text", "Cell text"] },
];
