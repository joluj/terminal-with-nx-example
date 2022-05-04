import { MyCoolClass } from './app';
import { environment } from './environments/environment';

console.log('Hello World! :D');

const cool = new MyCoolClass(environment.production);

console.log(cool.doSomething());
