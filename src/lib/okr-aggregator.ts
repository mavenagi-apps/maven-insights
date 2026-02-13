import type { Okr } from "@/types/okr";
import { generalOkrs, helixOkrs, forgeOkrs, athenaOkrs } from "@/data/mock-prodeng";
import { fluxOkrs } from "@/data/mock-flux";
import { solutionsOkrs } from "@/data/mock-solutions";
import { cxCustomerHealthOkrs, cxRenewalsOkrs } from "@/data/mock-cx";
import { salesOkrs, sdrOkrs } from "@/data/mock-sales";
import { marketingOkrs } from "@/data/mock-marketing";

export interface SubTeam {
  name: string;
  okrs: Okr[];
}

export interface TeamOkrGroup {
  team: string;
  key: string;
  subTeams: SubTeam[];
}

export function getAllTeamOkrs(): TeamOkrGroup[] {
  return [
    {
      team: "Prod/Eng",
      key: "prodeng",
      subTeams: [
        { name: "General", okrs: generalOkrs },
        { name: "Forge", okrs: forgeOkrs },
        { name: "Flux", okrs: fluxOkrs },
        { name: "Helix", okrs: helixOkrs },
        { name: "Athena", okrs: athenaOkrs },
      ],
    },
    {
      team: "Solutions",
      key: "solutions",
      subTeams: [{ name: "Solutions", okrs: solutionsOkrs }],
    },
    {
      team: "CX",
      key: "cx",
      subTeams: [
        { name: "Customer Health", okrs: cxCustomerHealthOkrs },
        { name: "Renewals", okrs: cxRenewalsOkrs },
      ],
    },
    {
      team: "Sales",
      key: "sales",
      subTeams: [
        { name: "Sales", okrs: salesOkrs },
        { name: "SDR", okrs: sdrOkrs },
      ],
    },
    {
      team: "Marketing",
      key: "marketing",
      subTeams: [{ name: "Marketing", okrs: marketingOkrs }],
    },
  ];
}
