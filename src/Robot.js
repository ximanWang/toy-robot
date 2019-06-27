const tableSize = { x: 4, y: 4 };

class Robot {
    constructor() {
        this.isPlaced = false;
        this.position = {
            x: null,
            y: null
        };
        this.direction = null;
    }

    place(x, y) {
        return x + y;
    }
}
export { Robot };
