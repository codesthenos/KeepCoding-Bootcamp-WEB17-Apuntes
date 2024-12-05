var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// this makes the transpiler understand that this file is a module
// export {}
var _this = this;
var Library = /** @class */ (function () {
    function Library(location, topic) {
        this.items = [];
        this.createdAt = new Date();
        this.location = location;
        this.topic = topic;
    }
    Library.prototype.add = function (item) {
        this.items.push(item);
    };
    Library.prototype.list = function () {
        console.table(this.items);
    };
    return Library;
}());
var bookLibrary1 = {
    items: [],
    createdAt: new Date(),
    location: 'spain',
    topic: 'sports',
    add: function (item) { return _this.items.push(item); },
    list: function () { }
};
var magazineLibrary1 = {
    items: [],
    createdAt: new Date(),
    location: 'england',
    topic: 'motor',
    add: function (item) { return _this.items.push(item); },
    list: function () { }
};
var book1 = {
    title: 'Libro 1',
    author: 'Author 1',
    year: 2021,
    isbn: 'isbn1'
};
var book2 = {
    title: 'Libro 2',
    author: 'Author 2',
    year: 2022,
    isbn: 'isbn2'
};
var book3 = {
    title: 'Libro 3',
    author: 'Author 3',
    year: 2023,
    isbn: 'isbn3'
};
var magazine1 = {
    name: 'magazine1',
    topic: 'topic1',
    date: new Date(),
    barcode: 'barcode1'
};
var magazine2 = {
    name: 'magazine2',
    topic: 'topic2',
    date: new Date(),
    barcode: 'barcode2'
};
var bookLibrary = new Library('spain', 'history');
var magazineLibrary = new Library('eeuu', 'stories');
bookLibrary.add(book1);
// --- clonando axios
function get(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch(path)
                    .then(function (res) { return res.json()
                    .then(function (json) { return json; }); })];
        });
    });
}
var products = [
    {
        name: 'shirt',
        price: 22,
        description: 'shirt 22 dollar',
        category: 'clothes'
    },
    {
        name: 'moto',
        price: 22000,
        description: 'moto 22000 dollar',
        category: 'motor'
    },
    {
        name: 'football',
        price: 26,
        description: 'football 26 dollar',
        category: 'sports'
    }
];
console.table(products);
var services = [
    {
        customerName: 'Juan',
        price: 22,
        periodicity: 'periodicity 1'
    },
    {
        customerName: 'Pepe',
        price: 22000,
        periodicity: 'periodicity 2'
    },
    {
        customerName: 'Antonio',
        price: 2,
        periodicity: 'periodicity 3'
    }
];
console.table(services);
function findCheap(array) {
    var cheapest = array[0];
    array.forEach(function (element) {
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    });
    return cheapest;
}
var cheapestProduct = findCheap(products);
var cheapestService = findCheap(services);
console.log('cheapest PRODUCT: ', cheapestProduct, ' | cheapest SERVICE: ', cheapestService);
var userResponse = {
    ts: 123456,
    statusCode: 200,
    data: [
    // Array de usuarios...
    ]
};
var exampleResponse1 = {
    ts: 123456,
    statusCode: 200,
    data: [
    // Array de productos...
    ]
};
var exampleResponse2 = {
    ts: 123456,
    statusCode: 200,
    data: 'string'
};
