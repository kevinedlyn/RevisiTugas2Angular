import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, public variabelglobal : GlobSerService) { }

  ngOnInit() {
  }

}