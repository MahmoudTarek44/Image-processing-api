"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var express_1 = __importDefault(require("express"));
var imageRoutes_1 = __importDefault(require("./subRoutes/imageRoutes"));
var appRoutes = express_1.default.Router();
appRoutes.get('/', function (req, res) {
    res.send('App main routes');
});
appRoutes.use('/imageResize', imageRoutes_1.default);
exports.default = appRoutes;
