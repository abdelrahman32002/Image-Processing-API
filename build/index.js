"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const csvtojson_1 = __importDefault(require("csvtojson"));
const express_1 = __importDefault(require("express"));
//const csv=require('csvtojson');
const app = (0, express_1.default)();
const port = 3000;
const oldFile = './users.csv';
const newFile = 'users.json';
app.get('/convert', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, csvtojson_1.default)()
        .fromFile(oldFile)
        .then((jsonArray) => {
        const newArray = jsonArray.map((user) => {
            if (user.phone == "") {
                user.phone = "missing number";
            }
            return user;
        });
        fs_1.promises.writeFile(newFile, JSON.stringify(jsonArray));
    });
    //  const jsonArray=await convert().fromFile('../users.csv');
}));
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
