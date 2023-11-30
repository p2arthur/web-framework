interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}
  public get(propName: string): string | number {
    return this.data.name;
  }

  public set(update: UserProps): void {}
}
