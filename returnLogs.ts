import TrajectoryProps from './types';

export const startLog = () => {
  console.clear();
  console.log('\n');
  console.log('Bem vindo ao jogo de tiro ao alvo!');
  console.log('Pressione "Ctrl + C" para sair do jogo');
  console.log('\n');
};

export const debugLog = (
  trajectory: TrajectoryProps,
  alvo: TrajectoryProps
) => {
  console.log('\n');
  console.log(`Tragetória: ${trajectory.x}, ${trajectory.y}`);
  console.log(`Alvo: ${alvo.x}, ${alvo.y}`);
  console.log('\n');
};
