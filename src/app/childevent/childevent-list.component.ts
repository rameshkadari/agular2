import { Component , Input , EventEmitter, Output} from "@angular/core";

@Component({
    selector:'childeventlist-app',
    template:`
    <div>
      <h2>
    Up comming Events ...
      </h2>
         <div>Name: {{childevent.name}}</div>
         <div>Phone No: {{childevent.phone}}</div>
         <button class="btn btn primary"  (click)="handleMe()"> Click Me!</button>
    </div>`
})
export class ChildEventListComponent{
   @Input() childevent:any
   @Output() eventEmitor = new EventEmitter();
   handleMe()
    {
      this.eventEmitor.emit('foo');

    }


}