export class Paginator {
    total_count: number = 0;
    pageIndex: number = 1;
    resultPerPage: number = 20;
    items: any[] = [];
    sort: Sort = new Sort();
    search: Search = new Search();
}

class Sort {
    active: boolean = false;
    direction: string = 'ASC';
    colName: string;
}

class Search {
    active: boolean = false;
    value: string;
    colName: string;
}
