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

    const nextDraggableSibiling = getDraggablePosition(container, event.clientY);

    /* append element to the end of the target container */
    const draggableElement = document.querySelector('.dragging');
    console.log('nextDraggableSibiling: ', nextDraggableSibiling);

    if (nextDraggableSibiling == null) {
      container.appendChild(draggableElement);
    } else {
      container.insertBefore(draggableElement, nextDraggableSibiling);
    }

  })
});

function getDraggablePosition( container, yCoord ) {
  /* convert this to array */
  const draggableElementList = [...container.querySelectorAll('.container__draggable:not(.dragging')];

  return draggableElementList.reduce( (closestSubsequentElement, child) => {
    const boundingBox = child.getBoundingClientRect();
    
    /* distance between center of box and mouse cursor */
    const offset = yCoord - boundingBox.top - boundingBox.height / 2;

    console.log('boundingBoxOffset: ', offset);
    /* we're only concerned with offsets < 0 (hovering over element instead of below) but as close to 0 as possible */
    console.log('offset: ', offset);
    if ( offset < 0 && offset > closestSubsequentElement.offset ) {
      console.log('getDraggablePosition, if conditional, about to return');
      return {
        offset: offset,
        element: child
      }
    } else {
      console.log('getDraggablePosition, else conditional');
      return closestSubsequentElement;
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element
}