import * as Vorpal from 'vorpal';
import { Command } from '../types/vorpal';

type BaseCommandProps<T extends string> = {
  name: string;
  options: {
    [k in T]: { short?: string; description?: string };
  };
};

export type BaseCommandArgs<T extends string> = {
  [k in T]: string | boolean | unknown | undefined;
};

export abstract class BaseCommand<T extends string> {
  protected constructor(
    protected readonly vorpal: Vorpal,
    protected readonly props: BaseCommandProps<T>
  ) {
    let command = this.vorpal.command(props.name) as Command;

    for (const key of Object.keys(props.options)) {
      const value = props.options[key];
      let input = '';
      if (value.short) {
        input += `-${value.short}, `;
      }
      input += `--${key} <name>`;

      command = command.option(input, value.description);
    }

    command.action(async (args, callback) => {
      let paramMissing = false;
      const options = args.options as BaseCommandArgs<T>;
      for (const key of Object.keys(this.props.options)) {
        if (options[key] == null) {
          this.log(`Parameter '${key}' is required.'`);
          paramMissing = true;
        }
      }
      if (!paramMissing) {
        await this.action(options);
      }
      callback();
    });
  }

  log(value: string, ...values: string[]) {
    this.vorpal.log(value, ...values);
  }

  abstract action(args: unknown): void | Promise<void>;
}
