import { Component, OnInit } from '@angular/core';
import {UserService} from "@services/user.service";
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-analyze-settings',
  templateUrl: './analyze.component.html',
  styleUrls: ['../settings.component.scss']
})
export class AnalyzeSettingsComponent implements OnInit {

  constructor(private auth: AuthService, private userSvc: UserService) { }

  ngOnInit() {
  }

}