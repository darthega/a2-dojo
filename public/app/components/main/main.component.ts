import { Component } from 'angular2/core';

@Component({
    moduleId: __moduleName,
    selector: 'main-app',
    templateUrl : 'main.component.html'
})
export class MainComponent{
    public firstName: string;
    public lastName: string;

    constructor() {
        this.firstName = 'Han';
        this.lastName = 'Solo';
    }
}
