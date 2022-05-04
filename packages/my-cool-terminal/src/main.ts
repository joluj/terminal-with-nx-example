import * as _vorpal from 'vorpal';

const vorpal = new _vorpal();

vorpal
  .command('upload-nft')
  .option('-n, --name name')
  .action(async function (args, callback) {
    const upload = (name) => {
      this.log(`Uploading ${name}...`);
      setTimeout(() => this.log('...'), 1000);
      setTimeout(() => this.log('...'), 2000);
      setTimeout(() => this.log('...'), 3000);
      setTimeout(() => {
        this.log('Done');
        callback();
      }, 4000);
    };

    if (args.options.name) {
      upload(args.options.name);
      return;
    }

    this.prompt(
      {
        type: 'input',
        name: 'name',
        message: 'How should it be called? ',
      },
      (result) => {
        upload(result.name);
        callback();
      }
    );
  });

vorpal.delimiter('my-cool-app $').show();
