interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}

  // return the requested data based on prop name
  public get(propName: string): string | number {
    return this.data[propName];
  }

  public set(update: UserProps): void {
    this.data = update;
  }
}
