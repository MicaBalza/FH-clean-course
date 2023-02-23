(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const fruits = ['manzana', 'cereza', 'ciruela'];

    return fruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const fruitsByColor: Record<string, string[]> = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    if (Object.keys(fruitsByColor).includes(color)) return fruitsByColor[color];

    throw Error('the color must be: red, yellow, purple');
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    // if (isFirstStepWorking === true) {
    //   if (isSecondStepWorking === true) {
    //     if (isThirdStepWorking === true) {
    //       if (isFourthStepWorking === true) {
    //         return 'Working properly!';
    //       } else {
    //         return 'Fourth step broken.';
    //       }
    //     } else {
    //       return 'Third step broken.';
    //     }
    //   } else {
    //     return 'Second step broken.';
    //   }
    // } else {
    //   return 'First step broken.';
    // }

    const stepNames = ['First', 'Second', 'Third', 'Fourth'];
    const stepStates = [true, false, true, true];
    const brokenStep = stepStates.findIndex((step) => !step);

    if (brokenStep < 0) return 'Working properly!';

    return stepNames[brokenStep] + ' step broken.';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
