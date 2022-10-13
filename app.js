//получаем необходимый элемент из дом дерева
const item = document.querySelector('.item')

//получаем все плейсхолдеры
const placeholders = document.querySelectorAll('.placeholder')

//добавляем события для неоходимого элемента, и передаем параметр строчки
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

//проходимся по кахждому плейсхолдеру из массива
for (const placeholder of placeholders) {
  console.log(placeholder)
  //добавляем события, и передаем им сразу параметр
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

//создаем функции которые будут выполняться при событиях
function dragstart(event) {
  //console.log('drag cstart', event.target) вариант вместо event.target использовать this, но не стоит

  //добавляем класс при перетаскивании
  event.target.classList.add('hold')
  //добавляем класс чтобы убрать перетаскиваемый со стартовой позиции. но делаем с колбэк функцией для задержки, чтобы не пропал элемент под курсором
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  //убираем класс холд при отпускании, убираем хайд когда отпустили
  event.target.className = 'item'
  //можно записать подругому -  event.target.classList.remove('hold', 'hide')
  
}

//создаем функции для обработки событий при передвижении карточки (over,enter,leave...)

function dragover(event) {
 event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')
  

}

function dragleave(event) {
  //убираем подсветку куда вставить если уводим в сторону
  event.target.classList.remove('hovered')
  
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}

