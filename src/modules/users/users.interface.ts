export interface Iusers {
  name: string;
  email: string;
  role: "admin" | "user";
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface authUser {
  email: string;
  password: string;
}
