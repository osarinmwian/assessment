import {Currency, PaymentMethod} from '../../util';

export interface TransactionResponse {
  status: string;
  transactionId?: string;
  message?: string;
  data?: any;
}
export interface PaymentSDKProps {
  apiKey: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod[];
  customerEmail: string;
  customerPhone?: string;
  customerName?: string;
  reference?: string;
  pin?: string;
  accessToken?: string;
  onPaymentSuccess: (response: TransactionResponse) => void;
  onPaymentError: (error: TransactionResponse) => void;
  onPaymentCancel: () => void;
}
