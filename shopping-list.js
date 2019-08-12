function ShoppingFactory() {
    var list = []

    function addingItem(item) {
        if (!list.includes(item)) {
            list.push(item);
        }
        return list;

    }
    function getItem() {
        return list;
    }



    return {
        addingItem,
        getItem
    }
}