/**
 * @see {@link https://leetcode.com/problems/min-cost-climbing-stairs/description}
 * 
 * @description Top-down подход.
 * 
 * 1. Рассчитать стоимость текущей первой ступеньки:
 *  предыдущая сумма первых ступенек + стоимость[предыдущий индекс первой ступеньки]
 * 
 * 2. Рассчитать стоимость текущей второй ступеньки:
 *  предыдущая сумма вторых ступенек + стоимость[предыдущий индекс второй ступеньки]
 * 
 * 3. Выбрать минимум из результатов пунктов 1 и 2.
 */
export function minCostSteps(cost: number[]) {
  let dp = (currentStepIndex: number) => {
    // Базовый случай
    if (currentStepIndex <= 1) {
      return 0;
    }

    if (memo.has(currentStepIndex)) {
      return memo.get(currentStepIndex);
    }

    const twoStep = dp(currentStepIndex - 1) + cost[currentStepIndex - 1];
    const oneStep = dp(currentStepIndex - 2) + cost[currentStepIndex - 2];

    // 2. Рекуррентное соотношение
    memo.set(
      currentStepIndex,
      Math.min(
        twoStep,
        oneStep,
      )
    );

    return memo.get(currentStepIndex);
  }

  let memo = new Map();

  return dp(cost.length);
}
