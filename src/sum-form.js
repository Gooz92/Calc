import $ from 'create-element';

export const sumForm = () => {
  const aInput = $('input');
  const bInput = $('input');

  const resultContainer = $('span');

  return $('form', {
    onsubmit: e => {
      e.preventDefault();
      const result = Number(aInput.value) + Number(bInput.value);
      resultContainer.innerText = result;
    }
  },  [
    aInput,
    '+',
    bInput,
    $('button', '='),
    resultContainer
  ]);
};
