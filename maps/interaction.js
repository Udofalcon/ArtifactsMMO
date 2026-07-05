const MapContent = require('./map_content');
const Transition = require('./transition');

class Interaction {
    content; // Optional
    transition; // Optional

    constructor({
        content,
        transition,
    }) {
        this.content = content !== null ? new MapContent(content) : null;
        this.transition = transition !== null ? new Transition(transition) : null;
    }
}

module.exports = Interaction;