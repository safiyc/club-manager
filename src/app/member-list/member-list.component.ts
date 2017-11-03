import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = [
    new Member('Name1', 'Description2', 1),
    new Member('Name2', 'Description2', 2)
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  }

}
