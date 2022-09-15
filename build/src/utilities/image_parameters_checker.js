"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var rightParameters = function (req, res, next) {
    if (!req.query.name || !req.query.width || !req.query.height) {
        res.send('Please include parameters (name, width, height) in the URL');
        return;
    }
    else {
        if (Number.isNaN(Number(req.query.width))) {
            res.send('Width must be a number');
            return;
        }
        else if (Number.isNaN(Number(req.query.height))) {
            res.send('Height must be a number');
            return;
        }
    }
    next();
    //)
};
var existingFile = function (req, res, next) {
    var imagePath = "./images/".concat(req.query.name, ".jpg");
    if (fs_1.default.existsSync(imagePath)) {
        next();
    }
    else {
        res.send('Error 404 :The image does not exist');
    }
};
var middleware = [rightParameters, existingFile];
exports.default = middleware;
