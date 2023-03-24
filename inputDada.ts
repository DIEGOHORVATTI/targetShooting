import { terminal } from './terminal';

export const chooseAngle = (): Promise<string> => {
  return new Promise((resolve) => {
    terminal.question('Digite o ângulo: ', (input) => {
      resolve(input);
    });
  });
};

export const chooseSpeed = (): Promise<string> => {
  return new Promise((resolve) => {
    terminal.question('Digite a velocidade: ', (input) => {
      resolve(input);
    });
  });
};
