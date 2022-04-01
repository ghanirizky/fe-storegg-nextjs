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
    _id : string,
    coinQuantity : string
    coinName : string 
    price : number
}

export interface PlayerTypes {
  _id : string
  avatar? : string
  email : string
  favorite : string
  name : string
  role? : string
  status? : string
  username : string
}