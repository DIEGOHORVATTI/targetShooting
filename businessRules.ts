import { terminal } from './terminal';
import { chooseAngle, chooseSpeed } from './inputDada';

const calculateTrajectory = async (): Promise<{ x: number; y: number }> => {
  const angle = Number(await chooseAngle());
  const speed = Number(await chooseSpeed());
  const radians = (angle * Math.PI) / 180;
  const timeOfFlight = (2 * speed * Math.sin(radians)) / 9.81;
  const distance = speed * Math.cos(radians) * timeOfFlight;
  const maxHeight = (speed * Math.sin(radians)) ** 2 / (2 * 9.81);
  const trajectory = {
    x: distance,
    y: maxHeight
  };
  return trajectory;
};

export const verificarColisao = (
  alvo: { x: number; y: number },
  projétil: { x: number; y: number }
): boolean => {
  const distancia = Math.sqrt(
    (projétil.x - alvo.x) ** 2 + (projétil.y - alvo.y) ** 2
  );
  return distancia <= 10;
};

const startGame = async () => {
  const alvo = { x: 100, y: 100 };
  const trajectory = await calculateTrajectory();
  const isColisao = verificarColisao(alvo, trajectory);
  if (isColisao) {
    console.log('Acertou!');
  } else {
    console.log('Errou!');
    if (trajectory.y < alvo.y) {
      console.log('Ajuste o ângulo de lançamento para cima.');
    } else {
      console.log('Ajuste o ângulo de lançamento para baixo.');
    }
    if (trajectory.x < alvo.x - 10) {
      console.log('Aumente a velocidade de lançamento.');
    } else if (trajectory.x > alvo.x + 10) {
      console.log('Diminua a velocidade de lançamento.');
    }
    await startGame();
  }
  terminal.close();
};

console.log('\n\n');
console.log('Bem vindo ao jogo de tiro ao alvo!');
console.log('\n\n');

console.clear();
startGame();
