import * as _vorpal from 'vorpal';
import { HelloCommand, UploadNftCommand } from './app';

const vorpal = new _vorpal();

new HelloCommand(vorpal);
new UploadNftCommand(vorpal);

vorpal.delimiter('my-cool-app $').show();
