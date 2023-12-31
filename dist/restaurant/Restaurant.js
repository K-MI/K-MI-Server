"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const typeorm_1 = require("typeorm");
const Detail_Restaurant_1 = require("./Detail_Restaurant");
let Restaurant = exports.Restaurant = class Restaurant {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('increment'),
    __metadata("design:type", Number)
], Restaurant.prototype, "rest_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Detail_Restaurant_1.Detail_Restaurant, (detail_rest) => detail_rest.user_id),
    __metadata("design:type", Array)
], Restaurant.prototype, "detail_rest", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Restaurant.prototype, "rest_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], Restaurant.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], Restaurant.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], Restaurant.prototype, "avg_start", void 0);
exports.Restaurant = Restaurant = __decorate([
    (0, typeorm_1.Entity)()
], Restaurant);
