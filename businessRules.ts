import {
  gravity,
  sineRadians,
  cosineRadians,
  degressRadians,
  hitTargetRadius
} from './config';
import TrajectoryProps from './types';
import { chooseAngle, chooseSpeed } from './inputDada';

// Calcula a trajetória do projétil com base no ângulo e na velocidade escolhidos pelo usuário
export const calculateTrajectory = async (): Promise<TrajectoryProps> => {
  // Escolhe o ângulo e a velocidade do projétil
  const angle = Number(await chooseAngle());
  const speed = Number(await chooseSpeed());

  // Converte o ângulo de graus para radianos
  const radians = angle * degressRadians;

  // Calcula o seno e o cosseno do ângulo em radianos
  const sine = sineRadians(radians);
  const cosine = cosineRadians(radians);

  // Calcula a distância e a altura máxima da trajetória
  const distance = (speed * cosine * (2 * speed * sine)) / gravity;
  const maxHeight = (speed * sine) ** 2 / (2 * gravity);

  // Retorna a distância e a altura máxima da trajetória
  return {
    x: distance,
    y: maxHeight
  };
};

// Verifica se o projétil colidiu com o alvo
export const verificarColisao = (
  alvo: TrajectoryProps,
  projétil: TrajectoryProps
): boolean => {
  // Calcula a distância entre o projétil e o alvo
  const distanceToTarget = Math.hypot(projétil.x - alvo.x, projétil.y - alvo.y);

  // Verifica se a distância é menor ou igual ao raio do alvo
  return distanceToTarget <= hitTargetRadius;
};
