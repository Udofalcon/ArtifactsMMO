const MapContentSchema = require('./map_content');
const TransitionSchema = require('./transition');

class InteractionSchema {
    content; // Optional
    transition; // Optional

    constructor({
        content,
        transition,
    }) {
        this.content = content !== null ? new MapContentSchema(content) : null;
        this.transition = transition !== null ? new TransitionSchema(transition) : null;
    }
}

module.exports = InteractionSchema;