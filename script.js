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
  container.addEventListener('dragover', event => {
    /* remove circle-x (do not) symbol when dragging, as dropping inside an element is inheritantly disabled */
    event.preventDefault();

    /*  */
    const nextDraggableSibiling = getDraggablePosition(container, event.clientY);

    /* append element to the end of the target container */
    const draggableElement = document.querySelector('.dragging');
    container.appendChild(draggableElement);
  })
});

function getDraggablePosition( container, yCoord ) {
  /* convert this to array */
  const draggableElementList = [...container.querySelectorAll('.container__draggable:not(.dragging')];

  draggableElementList.reduce( (closestSubsequentElement, child) => {
    const test = child.getBoundingClientRect();
    console.log('getDraggablePosition, boundingBox: ', test)
  }, {offset: Number.POSITIVE_INFINITY})
}