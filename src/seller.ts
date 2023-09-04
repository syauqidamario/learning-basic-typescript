export interface Seller{
      id:number;
      name:string;
      address?:string;
      readonly nib: string;
      readonly npwp: string;
}

//Read-only properties (properties yang tidak bisa diubah lagi)