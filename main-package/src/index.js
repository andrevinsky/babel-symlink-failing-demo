export * from 'secondary-package';
import { helloWorld } from 'secondary-package';

console.log(`main package, imported from secondary linked package: ${ helloWorld }`);
