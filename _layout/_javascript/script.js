'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const range = document.getElementById('range');

range.addEventListener('input', function (e) {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
  const rangeLabel = getComputedStyle(label).getPropertyValue('width');

  const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabel = +rangeLabel.substring(0, rangeLabel.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (numWidth / max) - numLabel / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
