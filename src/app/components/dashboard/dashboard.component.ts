import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public commitDetails: any;

  constructor(private githubService: GithubServiceService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.githubService.getDetails().subscribe(
      data => {
        this.commitDetails = data;
      },
      err => console.log(err),
      () => console.log('github-API loaded')
    );
  }

}
