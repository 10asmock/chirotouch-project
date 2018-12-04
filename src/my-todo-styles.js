import {
    Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';
import { LitElement, html } from '@polymer/lit-element';

const myTodoStyleElement = document.createElement('dom-module');
myTodoStyleElement.innerHTML =
    `<template>
    <style>
      :host {
        display: block;
      }

      h1 {
        font-size: 70px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.15);
      }

      section {
        background: #fff;
        margin: 30px 0 40px 0;
        position: relative;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
      }

      #list-container {
        margin: 0;
        padding: 0;
        list-style: none;
        border-top: 1px solid #e6e6e6;
      }
    </style>
  </template>`
  myTodoStyleElement.register('my-todo-style-element');
