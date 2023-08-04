import $ from 'create-element';

export const sumForm = () => {
  const aInput = $('input');
  const bInput = $('input');

  const resultContainer = $('span');

  const equalsButton = $('button', '=', {
    onclick: () => {
      // TODO handle onsubmit instead onclick
      const result = Number(aInput.value) + Number(bInput.value);
      resultContainer.innerText = result;
    }
  });

  return $('form', {
    onsubmit: e => {
      e.preventDefault()
    }
  },  [
    aInput,
    '+',
    bInput,
    equalsButton,
    resultContainer
  ]);
};
