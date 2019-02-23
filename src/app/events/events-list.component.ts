import { Component } from "@angular/core";

@Component({
    selector:'eventlist-app',
    template:`
    <childeventlist-app (eventEmitor)="handleEvetClickMe($event)" [childevent]="events1"></childeventlist-app>
    `
})
export class EventListComponent{
    events1:any= {
        name :'Ramesh',
        phone: '9533212144'
    }

    handleEvetClickMe(data)
    {
        console.log('received: ', data);
        
    }


}