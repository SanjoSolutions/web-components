import { createTemplate } from '../createTemplate.js'

const template = createTemplate(`
  <template>
    <div style="width: 2rem; height: 2rem; background-color: red;">
  
    </div>
  </template>
`)

class HTMLElementTemplate extends HTMLElement {
  constructor() {
    super()
    const templateContent = template.content
    const shadowRoot = this.attachShadow({mode: 'closed'})
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}

customElements.define('html-element-template', HTMLElementTemplate)
