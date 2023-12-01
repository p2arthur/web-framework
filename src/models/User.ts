interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  // return the requested data based on prop name
  public get(propName: string): string | number {
    return this.data[propName];
  }

  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  public on(eventName: string, callBack: Callback) {}
}
