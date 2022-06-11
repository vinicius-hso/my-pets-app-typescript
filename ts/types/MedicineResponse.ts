import { MedicineType } from "../types";

export type MedicineResponse = {
  count?: number;
  medicines?: MedicineType[];
  idmedicine?: string;
  error?: string;
};
