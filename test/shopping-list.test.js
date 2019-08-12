describe("shopping list functions", function() {

it('should be able to add an item to the list ', function () {

    var instance = ShoppingFactory();

    instance.addingItem("milk");
    
    assert.deepEqual(["milk"], instance.addingItem());
});
it('should be able to add two items to the list ', function () {

    var instance = ShoppingFactory();

    instance.addingItem("apple");
    instance.addingItem("chips");

    
    assert.deepEqual(["milk","chips"], instance.addingItem());
});
});