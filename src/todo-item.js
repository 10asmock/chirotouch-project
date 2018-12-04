import {
    Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';
import { LitElement, html } from '@polymer/lit-element';

import './todo-item-styles.js';

export default class TodoItem extends PolymerElement {
    static get is() {
        return 'todo-item';
    }

    static get properties() {
        return {
            text: {
                type: String
            },
            checked: {
                type: Boolean,
                attrName: 'checked'
            },
            index: {
                type: Number
            },
        };
    }

    static get template() {
        return `
            <style include="todo-item-style-element"></style>
            <li class$="item [[isCompleted(checked)]]">
                <button class="checkmark" type="checkbox"
                checked=[[checked]] on-click="onToggle">
                ✓</button>
                <label>[[text]]</label>
                <button class="destroy" on-click="handleOnRemove">x</button>
            </li>
        `
    }

    handleOnRemove(e) {
        this.dispatchEvent(new CustomEvent('remove', { detail: this.index }));
    }
    onToggle(e){
        this.dispatchEvent(new CustomEvent('toggle', { detail: this.index }));
    }
    isCompleted(completed) {
        return completed ? 'completed' : '';
    }
}

customElements.define(TodoItem.is, TodoItem);
