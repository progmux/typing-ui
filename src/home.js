import moment from 'moment';
import elemancer from './elemancer.js';
import svg from './svg.js';

export default {
    /**
     * @typedef {Object} TypingStats
     * @property {number} startTime
     * @property {number} endTime
     * @property {string[]} wordList
     * @property {number} wordIndex
     * @property {string} currentText
     * @property {number} mistakes Total number of incorrect key strokes.
     */

    init: function () {
        let stats = {
            startTime: moment().unix(),
            wordlist: getWordList(),
            wordIndex: 0,
            mistakes: 0
        };

        let header = elemancer.add({
            parent: document.body,
            attributes: {
                class: `header`
            }
        });

        let logo = Promise.resolve(elemancer.add({
            parent: document.body,
            tagName: `svg`,
            attributes: {
                viewBox: svg.logo.viewBox,
                class: `logo`
            }
        })).then(function(element) {
            return elemancer.add({
                parent: element,
                tagName: `path`,
                attributes: {
                    class: `path`,
                    d: svg.logo.path,
                }
            });
        });

        let currentWord = elemancer.add({
            parent: document.body,
            attributes: {
                class: `currentWord`
            },
            textContent: stats.wordlist[stats.wordIndex]
        });

        let input = elemancer.add({
            parent: document.body,
            tagName: `input`,
            attributes: {
                class: `input`
            },
            textContent: ``
        });
    }
};

function getWordList() {
    return [`The`, `quick`, `brown`, `fox`, `jumps`, `over`, `the`, `lazy`, `dog`];
}