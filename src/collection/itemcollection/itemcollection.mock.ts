export class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
    itemCollection: T[];

    constructor(itemCollection?: T[]) {
        this.itemCollection = itemCollection || [];
    }

    forEach(delegate: () => void): void;
    forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void;
    forEach(delegate: any): void {
        let modifiedCollection = this.itemCollection.map(delegate);
        this.itemCollection = <T[]><any>modifiedCollection;
    }

    get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
    get(itemNumber: number): T;
    get(itemName: string): T;
    get(): T[];

    get(param?: string | number | Xrm.Collection.MatchingDelegate<T> | T[]): T | T[] {
        if (param === undefined || param === null) {
            return this.itemCollection as T[];
        }
        else if (typeof param === 'string') {
            var attribute;
            
            for (var i in this.itemCollection) {
                let item = this.itemCollection[i] as any;

                if (item.getName !== undefined) {
                    if (item.getName() === param) {
                        attribute = item;
                        break;
                    }
                }
            }

            return attribute;
        }
        else if (typeof param === 'number') {
            return this.itemCollection[param];
        }

        else if (<Xrm.Collection.MatchingDelegate<T>>param !== undefined) {
            throw ('get itemcollection as delegate not implemented');
        }
    }

    getLength(): number {
        return this.itemCollection.length;
    }
}