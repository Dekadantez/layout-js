// import {
//   createElement,
//   createHeader,
//   createTab,
// } from '../../script/layout'

// const page = document.querySelector('.page')

// const header = createHeader()

// page.append(header)

// const title = createElement('h1', 'title', 'Ком`юніті')

// page.append(title)

// const tab = createTab('li', 'tab-item')
// page.append(tab)
//====
// document.addEventListener('DOMContentLoaded', function () {
//   const tabItems = document.querySelectorAll('.tab-item')

//   tabItems.forEach(function (tab) {
//     tab.addEventListener('click', function () {
//       const tabId = this.getAttribute('data-tab')
//       const content = document.getElementById(tabId)

//       // Удаляем активный класс у текущих вкладок и контента
//       document
//         .querySelector('.tab-item.active')
//         .classList.remove('active')
//       document
//         .querySelector('.tab-pane.active')
//         .classList.remove('active')

//       // Добавляем активный класс для выбранной вкладки и контента
//       this.classList.add('active')
//       content.classList.add('active')
//     })
//   })
// })
import {
  createContainerTab,
  createElement,
  createHeader,
  createMain,
} from '../../script/layout'

// ===

const page = document.querySelector('.page')

// ===

const header = createHeader()
page.append(header)

// ===

const title = createElement('h1', 'title', 'Ком`юніті')
page.append(title)

// ===

const containerTab = createContainerTab()
page.append(containerTab)

// ===

const containerMain = createMain()
page.append(containerMain)

// ===

// const POST_LIST = [
//   {
//     category: [
//       { text: 'Важливо', id: 1 },
//       { text: 'Нова', id: 2 },
//     ],
//     info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//     date: '25.01',
//     viewed: false,
//   },
//   {
//     category: [{ text: 'Нова', id: 2 }],
//     info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
//     date: '24.01',
//     viewed: true,
//   },
// ]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    // ===

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    // ===

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    // ===

    postHeader.append(categoryList, dateSpan)

    // ===

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    // ===

    postList.append(post)
  })

  return postList
}

// ===

const post = createPost()
page.append(post)

// ===
