const result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = '';
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    result.value = 'Error';
    setTimeout(() => (result.value = ''), 1000);
  }
}
