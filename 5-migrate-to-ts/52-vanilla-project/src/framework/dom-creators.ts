type SupportedElements = 'p' | 'div' | 'section' | 'article'

function createElement<T extends SupportedElements>(tagName: T, className = '') {
  const element = document.createElement(tagName)
  if (className.length) {
    element.className = className
  }
  return element
}

export const p = (className = '') => createElement('p', className)
export const div = (className = '') => createElement('div', className)
export const section = (className = '') => createElement('section', className)
export const article = (className = '') => createElement('article', className)

// checkout:
// const myElement = document.createElement('div')