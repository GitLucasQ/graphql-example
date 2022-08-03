"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("./database");

var _expressGraphql = require("express-graphql");

var _schemas = _interopRequireDefault(require("./schemas"));

var _resolvers = require("./resolvers");

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // GRAPHQL

app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schemas["default"],
  rootValue: _resolvers.resolvers
}));
app.listen(4000, function () {
  return console.log('Server online on http://localhost:4000');
});
var _default = app;
exports["default"] = _default;