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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var DataTable_1 = require('./lib/DataTable');
var DefaultSorter_1 = require('./lib/DefaultSorter');
var Paginator_1 = require('./lib/Paginator');
var BootstrapPaginator_1 = require('./lib/BootstrapPaginator');
var DataTable_2 = require('./lib/DataTable');
exports.DataTable = DataTable_2.DataTable;
var DefaultSorter_2 = require('./lib/DefaultSorter');
exports.DefaultSorter = DefaultSorter_2.DefaultSorter;
var Paginator_2 = require('./lib/Paginator');
exports.Paginator = Paginator_2.Paginator;
var BootstrapPaginator_2 = require('./lib/BootstrapPaginator');
exports.BootstrapPaginator = BootstrapPaginator_2.BootstrapPaginator;
var DataTableModule = (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [DataTable_1.DataTable, DefaultSorter_1.DefaultSorter, Paginator_1.Paginator, BootstrapPaginator_1.BootstrapPaginator],
            exports: [DataTable_1.DataTable, DefaultSorter_1.DefaultSorter, Paginator_1.Paginator, BootstrapPaginator_1.BootstrapPaginator]
        }),
        __metadata('design:paramtypes', [])
    ], DataTableModule);
    return DataTableModule;
}());
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=DataTable.module.js.map