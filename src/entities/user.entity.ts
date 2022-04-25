export class User {
  public name!: string;
  public avatar_url!: string;

  constructor(data?: User) {
    Object.assign(this, data);
  }
}
