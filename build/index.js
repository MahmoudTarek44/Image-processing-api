"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var express_1 = __importDefault(require("express"));
var appRoutes_1 = __importDefault(require("./routes/appRoutes"));
var port = 4000;
var app = (0, express_1.default)();
app.use('/app', appRoutes_1.default);
app.listen(port, function () {
    console.log("Server is running on port ".concat(port, " ...."));
});
