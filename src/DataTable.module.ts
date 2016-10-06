import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataTable} from './DataTable';
import {DefaultSorter} from './DefaultSorter';
import {Paginator} from './Paginator';
import {BootstrapPaginator} from './BootstrapPaginator';

export {DataTable, DataEvent, PageEvent, SortEvent} from './DataTable';
export {DefaultSorter} from './DefaultSorter';
export {Paginator} from './Paginator';
export {BootstrapPaginator} from './BootstrapPaginator';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [DataTable, DefaultSorter, Paginator, BootstrapPaginator],
    exports: [DataTable, DefaultSorter, Paginator, BootstrapPaginator]
})
export class DataTableModule { }