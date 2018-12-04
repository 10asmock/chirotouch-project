import {
  Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';
import { LitElement, html } from '@polymer/lit-element';
import './my-todo-styles.js';


export default class MyTodo extends PolymerElement {

  static get is() { return 'my-todo'; }

  static get template() {
    return `
      <style include="my-todo-style-element"></style>
      <section>
        <todo-input></todo-input>
        <ul id="list-container">
          <template is="dom-repeat" items="[[list]]">
            <todo-item text="[[item.text]]" checked="[[item.checked]]" index="[[index]]" on-remove="removeItem" on-toggle="toggleItem"></todo-item>
          </template>
        </ul>
      </section>
    `
  }

  static get properties() {
    return {
      list: {
        type: Array,
        value: () => [
          { text: 'Get eggs', checked: false },
          { text: 'Get milk', checked: true }
        ]
      }
    }
  }

  ready() {
    super.ready();
    this.$input = this.shadowRoot.querySelector('todo-input');
    this.$input.addEventListener('onSubmit', this.addItem.bind(this));
  }

  addItem(e) {
    this.push('list', { text: e.detail, checked: false });
  }

  removeItem(e) {
    this.splice('list', e.detail, 1);
  }

  toggleItem(e, index) {
    const list = [...this.list];
    const item = list[index];
    list[index] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
    this.requestUpdate('list');
  }

  fireEvent() {
    this.dispatchEvent(new CustomEvent('grocery-list', {detail: 'tested!'}))
  }
}

customElements.define(MyTodo.is, MyTodo);
