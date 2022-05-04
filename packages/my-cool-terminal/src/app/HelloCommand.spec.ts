import { HelloCommand } from './HelloCommand';

const vorpalMock = {
  command: () => vorpalMock,
  option: () => vorpalMock,
  log: () => vorpalMock,
  action: () => vorpalMock,
};

describe('HelloCommand', () => {
  it('should print the name', async () => {
    const command = new HelloCommand(vorpalMock);
    const spy = jest.spyOn(command, 'log');

    await command.action({ name: 'Peter' });
    expect(spy).toBeCalledWith('Hello, Peter');
  });
});
