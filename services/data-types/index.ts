export interface CategoryTypes {
  _id: string;
  name: string;
  _v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalTypes {
  _id: string;
  coinQuantity: string;
  coinName: string;
  price: number;
}

export interface PlayerTypes {
  _id: string;
  avatar?: string;
  email: string;
  favorite: string;
  name: string;
  role?: string;
  status?: string;
  username: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface JWTPayloadTypes {
  player: PlayerTypes;
  iat: string;
}

export interface UserTypes {
  _id: string;
  phoneNumber: string;
  name: string;
}

export interface VoucherTypes {
  _id: string;
  name: string;
  user: UserTypes;
  thumbnail: string;
  nominals: NominalTypes;
  status: string;
  isFeatured: string;
  category: CategoryTypes;
}

export interface CheckOutPayloadTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface TransactionTypes {
  historyVoucherTopup: HistoryVoucherTopupTypes;
  historyPayment: HistoryPaymentTypes;
  historyUser: HistoryUserTypes;
  _id: string;
  name: string;
  accountUser: string;
  tax: number;
  value: number;
  status: "pending" | "success" | "failed";
  player: string;
  category: CategoryTypes;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface HistoryVoucherTopupTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: string;
  price: number;
}

export interface HistoryPaymentTypes {
  name: string;
  type: string;
  bankName: string;
  noRekening: string;
}

export interface HistoryPaymentTypes {
  name: string;
  type: string;
  bankName: string;
  noRekening: string;
}

export interface HistoryUserTypes {
  name: string;
  phoneNumber: number;
}

export interface TranasctionOverviewTypes {
  _id: string
  value: number
  name: string
}
