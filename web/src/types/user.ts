interface IDepartament {
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  type: string;
  departaments: IDepartament[]
}