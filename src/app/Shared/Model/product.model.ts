
export class product {
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public cost: number,
        public desctription: string,
        public image: string,
        public components: { name: string, Quantity: number }[]
    ) { }
}