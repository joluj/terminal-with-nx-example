export class MyCoolClass {
  constructor(private isProduction: boolean) {}

  doSomething() {
    return `Hello from Class! I'm running in the following mode: ${
      this.isProduction ? 'production' : 'development'
    }`;
  }
}
