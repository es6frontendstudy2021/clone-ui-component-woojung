export const onRender = callback => {
  if (typeof callback !== 'function') {
    throw new Error('callback should be only function');
  }
  (async () => {
    await Promise.resolve();
    callback();
  })();
};

export const getElementByReactId = reactId => document.querySelector(`[data-reactid="${reactId}"]`);

export const setComponentAttributes = ({ reactId, attributes }) => {
  onRender(() => {
    const component = getElementByReactId(reactId);
    for (const key of Object.keys(attributes)) {
      component[key] = attributes[key];
    }
  })
};

let instance = null;

class _React {
  constructor() {
    if (instance) {
      return instance;
    }
    this._values = {};
    this._prevValues = {};

    this._Component = null;
    this._$container = null;
    this._render = () => {};

    this.useState = (key, initialValue) => {
      const value = this._values[key] || initialValue;
      const setValue = (newValue) => {
        if (this._values[key] === newValue) {
          return;
        }
        this._prevValues[key] = this._values[key];
        this._values[key] = newValue;
        this._render();
      };
      return [value, setValue];
    };

    this.useEffect = (excute, keys) => {
      for (const key of keys) {
        if (this._prevValues[key] !== this._values[key]) {
          excute();
        }
      }
    };

    this.ReactDOM = {
      render: (Component, $container) => {
        this.Component = Component;
        this._$container = $container;
        this._render = () => {
          this._$container.innerHTML = this.Component();
        };
        this._render();
      },
    };
    instance = this;
  }
}

const _react = new _React();
export default _react.React;
export const { ReactDOM, useState, useEffect } = _react;
