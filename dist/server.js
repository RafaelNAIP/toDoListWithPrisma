"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var server = (0, express_1["default"])();
server.use(express_1["default"].json);
server.listen(3333, function () {
    console.log("server started");
});
server.use(routes_1["default"]);
//# sourceMappingURL=server.js.map