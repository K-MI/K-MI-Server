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
exports.Detail_Restaurant = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../user/User");
const Restaurant_1 = require("./Restaurant");
let Detail_Restaurant = exports.Detail_Restaurant = class Detail_Restaurant {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('increment'),
    __metadata("design:type", Number)
], Detail_Restaurant.prototype, "detail_rest_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Restaurant_1.Restaurant, (restaurant) => restaurant.detail_rest),
    __metadata("design:type", Restaurant_1.Restaurant)
], Detail_Restaurant.prototype, "rest_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.detail_rest),
    __metadata("design:type", User_1.User)
], Detail_Restaurant.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Detail_Restaurant.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Detail_Restaurant.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], Detail_Restaurant.prototype, "star", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: false }),
    __metadata("design:type", String)
], Detail_Restaurant.prototype, "comment", void 0);
exports.Detail_Restaurant = Detail_Restaurant = __decorate([
    (0, typeorm_1.Entity)()
], Detail_Restaurant);
