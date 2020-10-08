import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() title: string
  @Input() emoji: string
  @Input() boardTitle: string
  @Input() handle: string
  @Output() onHandleStanding = new EventEmitter()
}
