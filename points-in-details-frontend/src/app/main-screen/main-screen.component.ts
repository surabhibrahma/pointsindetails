import { Component, OnInit } from '@angular/core';
import { MainQuestionAnswerService } from '../main-question-answer.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private mainQuestionAnswerService: MainQuestionAnswerService) { }

  ngOnInit(): void {
  }

  onGetStatement(){
    console.log(this.mainQuestionAnswerService.getByID());
  }

}