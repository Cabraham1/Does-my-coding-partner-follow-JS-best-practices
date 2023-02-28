import setStorage from './storage.js';

import { deleteTask } from './crud-methods.js';

const clearAll = () => {
  const localData = JSON.parse(localStorage.getItem('todo'));
  const taskContainer = document.querySelectorAll('.list-item');
  taskContainer.forEach((e) => {
    if (e.classList.contains('list-selected-item')) {
      deleteTask(e);
    }
  });
  const count = 0;
  const data = Array.from(localData).filter((e) => e.completed === false);
  data.map((e) => ({ ...e, index: count + 1 }));
  setStorage(data);
};

export default clearAll;