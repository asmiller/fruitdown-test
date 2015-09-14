var pouch = new PouchDB('testdb', {adapter: 'fruitdown'});

var list = document.getElementById('items');

function addItemToList(item) {
    var li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
}

pouch.allDocs({include_docs: true}).then(function (results) {
    results.rows.forEach(function (item) {
        addItemToList(item.doc.val);
    });
});

function addItem() {
    var val = document.getElementById("test-input").value;

    pouch.put({_id: new Date().toJSON(), val: val}).then(function (result) {
        addItemToList(val);
    });
}