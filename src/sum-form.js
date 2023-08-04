import $ from 'create-element';

export const sumForm = () => {
  const aInput = $('input');
  const bInput = $('input');

  const resultContainer = $('span');

  const equalsButton = $('button', '=', {
    onclick: () => {
      const result = Number(aInput.value) + Number(bInput.value);
      resultContainer.innerText = result;
    }
  });

  return $('div', [
    aInput,
    '+',
    bInput,
    equalsButton,
    resultContainer
  ]);
};
