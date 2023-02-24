"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matrix_actions_1 = require("../../application/matrix.actions");
const matrix_entity_1 = require("../../domain/matrix.entity");
const matrix_controller_1 = require("../controllers/matrix.controller");
const router = (0, express_1.Router)();
router.post('/matrix', new matrix_controller_1.MatrixController(new matrix_actions_1.MatrixActions(), new matrix_entity_1.MatrixEntity()).rotateMatrix);
exports.default = router;
//# sourceMappingURL=matrix.router.js.map