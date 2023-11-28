import $ from 'create-element';

export const sumForm = () => {
  const aInput = $('input');
  const bInput = $('input');

  const resultContainer = $('span');

  return $('form', {
    onsubmit: e => {
      e.preventDefault();
    }
  },  [
    aInput,
    '+',
    bInput,
    $('button', '=', {
      onclick: () => {
        // TODO handle onsubmit instead onclick
        const result = Number(aInput.value) + Number(bInput.value);
        resultContainer.innerText = result;
      }
    }),
    resultContainer
  ]);
};
