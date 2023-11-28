import $ from 'create-element';

export const sumForm = () => {
  const aInput = $('input');
  const bInput = $('input');

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
        const result = Number(aInput.value) + Number(bInput.value);
        alert(result);
      }
    })
  ]);
};
