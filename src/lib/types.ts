export type Pet = {
  name: string;
  type: string;
}

export type Client = {
  id: number;
  fullname: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  nextAppointment: string;
  pets: Pet[];
}
