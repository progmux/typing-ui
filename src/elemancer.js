import map from 'lodash.map';

export default class {
  /**
   * The options to configure an element with.
   * @typedef {Object} ElemancerOptions
   * @property {HTMLElement} parent
   * @property {string} tagName
   * @property {string} textContent
   * @property {Object.<string, string>} attributes
   * @property {boolean} svg Identifies if element uses svg namespace.
   */

  /**
   * @param {ElemancerOptions} options
   */
  static add(options) {
    let element = options.svg ?
      document.createElementNS(`http://www.w3.org/2000/svg`, options.tagName) :
      document.createElement(options.tagName || `div`);

    map(options.attributes, function (value, key) {
      element.setAttribute(key, value);
    });

    if (options.textContent != null) {
      element.appendChild(document.createTextNode(options.textContent));
    }

    return options.parent.appendChild(element);
  }
};