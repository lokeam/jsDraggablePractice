/* get elements */
const draggables = document.querySelectorAll('.container__draggable');
const containers = document.querySelectorAll('.container');

/* set event listeners */
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', () => {
    console.log('drag over');
  })
});