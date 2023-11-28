import $ from 'create-element';

export const sumForm = () => {
  const input1 = $('input');
  const input2 = $('input');

  const resultContainer = $('span');

  return $('form', {
    onsubmit: e => {
      e.preventDefault();
      const result = Number(input1.value) + Number(input2.value);
      resultContainer.innerText = result;
    }
  },  [
    input1,
    '+',
    input2,
    $('button', '='),
    resultContainer,
  ]);
};
