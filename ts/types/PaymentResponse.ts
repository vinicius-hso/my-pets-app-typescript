import { PaymentType } from "../types";

export type PaymentResponse = {
  count?: number;
  payments?: PaymentType[];
  idpayment?: string;
  error?: string;
};
