import { BaseCommand, BaseCommandArgs } from './BaseCommand';
import * as Vorpal from 'vorpal';

type Options = 'name';

export class HelloCommand extends BaseCommand<Options> {
  constructor(vorpal: Vorpal) {
    super(vorpal, {
      name: 'hello',
      options: {
        name: { short: 'n', description: 'The name' },
      },
    });
  }

  override action(args: BaseCommandArgs<Options>) {
    this.log(`Hello, ${args.name}`);
  }
}
