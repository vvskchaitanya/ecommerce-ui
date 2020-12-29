export class User{
  username:string;
  email:string;
  firstName:string;
  lastName:string;
  phone:Phone;
  address:Address[];
  orders:Order[];
}

export class Phone{
  code:string;
  number:string;
}

export class Address{
  country:string;
  state:string;
  city:string;
  area:string;
  street:string;
  house:string;
  pincode:string;
}


export class Order{
  id:string;
  items:Product[];
  status:string;
  track
}

export class Product{
  id:string;
  name:string;
  price:string;
  variants:Variant[];
  description:string;
  instock:number;
  reviews:Review[];
}

export class Variant{
  name:string;
  description:string[];
  pictures:Picture;
}

export class Picture{
  name:string;
  product:string;
  file:File;
}

export class Review{
  user:User;
  rating:number;
  comment:string;
  attachments:File[];
}
