import { terminal } from './terminal';
import { chooseAngle, chooseSpeed } from './inputDada';

/*
  responsável por calcular a trajetória do projétil com base no ângulo e na velocidade 
  de lançamento escolhidos pelo usuário. A função retorna um objeto com as 
  coordenadas x e y da trajetória.
*/
const calculateTrajectory = async (): Promise<{ x: number; y: number }> => {
  const angle = Number(await chooseAngle());
  const speed = Number(await chooseSpeed());

  // converter um ângulo em graus para radianos
  const radians = (angle * Math.PI) / 180;

  // fórmula para calcular o tempo de voo de um projétil em um movimento de projétil.
  // 9.81 é a aceleração devido à gravidade na superfície da Terra
  const timeOfFlight = (2 * speed * Math.sin(radians)) / 9.81;

  //  fórmula usada para calcular a distância horizontal percorrida pelo projétil durante o tempo de voo
  const distance = speed * Math.cos(radians) * timeOfFlight;

  // fórmula usada para calcular a altura máxima alcançada pelo projétil durante o movimento de projétil
  const maxHeight = (speed * Math.sin(radians)) ** 2 / (2 * 9.81);

  return {
    x: distance,
    y: maxHeight
  };
};

// Essa é a fórmula usada para verificar se o projétil atingiu o alvo ou não
export const verificarColisao = (
  alvo: { x: number; y: number },
  projétil: { x: number; y: number }
): boolean => {
  return (
    Math.sqrt((projétil.x - alvo.x) ** 2 + (projétil.y - alvo.y) ** 2) <= 25
  );
};

const startGame = async () => {
  console.log('\n');
  const alvo = { x: 100, y: 100 };
  const trajectory = await calculateTrajectory();
  console.log('\n');
  if (verificarColisao(alvo, trajectory)) {
    console.log('Acertou!');
  } else {
    console.log('Errou!');
    console.log(`${trajectory.x}, ${trajectory.y}`);
    console.log(`${alvo.x}, ${alvo.y}`);
    if (trajectory.y < alvo.y) {
      console.table(alvo.y);
      console.table(alvo.y);
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

console.clear();
console.log('\n');
console.log('Bem vindo ao jogo de tiro ao alvo!');
startGame();
