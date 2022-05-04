import { BaseCommand, BaseCommandArgs } from './BaseCommand';
import * as Vorpal from '../types/vorpal';

type Options = 'name';

export class UploadNftCommand extends BaseCommand<Options> {
  constructor(vorpal: Vorpal) {
    super(vorpal, {
      name: 'upload-nft',
      options: { name: { short: 'n', description: 'The name for the nft' } },
    });
  }

  override async action(args: BaseCommandArgs<Options>): Promise<void> {
    if (args.name && typeof args.name === 'string') {
      await this.upload(args.name);
      return;
    }

    // This is not yet properly typed.
    this.vorpal.prompt(
      {
        type: 'input',
        name: 'name',
        message: 'How should it be called? ',
      },
      (result) => {
        this.upload(result.name);
      }
    );
  }

  async upload(name: string) {
    this.log(`Uploading ${name}...`);
    setTimeout(() => this.log('...'), 1000);
    setTimeout(() => this.log('...'), 2000);
    setTimeout(() => this.log('...'), 3000);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.log('Done');
        resolve();
      }, 4000);
    });
  }
}
