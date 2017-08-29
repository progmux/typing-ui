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
            attributes: {
                class: `header`
            },
            style: {
                'grid-column-start': 1,
                'grid-column-end': 13,
                'grid-row': 1,
            }
        });

        let logo = elemancer.add({
            tagName: `svg`,
            attributes: {
                viewBox: svg.logo.viewBox,
            },
            style: {
                'grid-column': 1,
                'grid-row': 1,
            },
            children: [{
                tagName: `path`,
                attributes: {
                    class: `path`,
                    d: svg.logo.path,
                }
            }]
        });

        let currentWord = elemancer.add({
            style: {
                display: `none`,
                'grid-column-start': 1,
                'grid-column-end': 13,
                'grid-row': 4,
            },
            textContent: stats.wordlist[stats.wordIndex]
        });

        let startButton = elemancer.add({
            parent: document.body,
            attributes: {
                class: `button`,
                clickable: `true`
            },
            style: {
                'grid-column-start': 6,
                'grid-column-end': 8,
                'grid-row': 4,
            },
            textContent: `Start`
        });

        let input = elemancer.add({
            tagName: `input`,
            attributes: {
                class: `input`
            },
            style: {
                'grid-column-start': 2,
                'grid-column-end': 12,
                'grid-row': 5,
            }
        });
    }
};

function getWordList() {
    return [`The`, `quick`, `brown`, `fox`, `jumps`, `over`, `the`, `lazy`, `dog`];
}