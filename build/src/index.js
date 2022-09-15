"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var port = 3000;
var app = (0, express_1.default)();
app.use('/api', index_1.default);
app.get('/', function (req, res) {
    res.send('connected');
});
app.listen(port, function () {
    console.log('I am here');
});
exports.default = app;
