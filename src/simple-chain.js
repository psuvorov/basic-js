const CustomError = require("../extensions/custom-error");

const chainMaker = {
    data: [],

    /**
     *
     * @returns {number}
     */
    getLength() {
        return this.data.length;
    },

    /**
     *
     * @param {any} value
     * @returns {chainMaker}
     */
    addLink(value) {
        this.data.push(value);

        return this;
    },

    /**
     *
     * @param {number} position
     * @returns {chainMaker}
     */
    removeLink(position) {
        if (position < this.getLength())
            this.data.splice(position - 1, 1);
        else {
            this.data = [];
            throw new Error();
        }

        return this;
    },

    /**
     *
     * @returns {chainMaker}
     */
    reverseChain() {
        this.data.reverse();

        return this;
    },

    /**
     *
     * @returns {(string|*)[]}
     */
    finishChain() {
        const res = this.data.map(x => x === null ?
            '( null )' :
            `( ${x} )`).join('~~');

        this.data = [];

        return res;
    }
};

module.exports = chainMaker;