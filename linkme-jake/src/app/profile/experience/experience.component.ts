import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  newexperience: string = '';
  repositories: Repository[] = [];
  avatarUrl?: string;

  constructor(public apolloProvider: Apollo) {}

  ngOnInit() {
    this.loadRepositories();
  }

  @Input() experience!: string[];
  @Output() newExperienceEvent = new EventEmitter<string>();
  newExperience: string = '';

  onNewExperience() {
    this.newExperienceEvent.emit(this.newExperience);
  }

  loadRepositories() {
    this.apolloProvider
      .watchQuery({
        query: gql`
          query {
            user(login: "drasch") {
              login
              avatarUrl
              email
              repositories(first: 20, privacy: PUBLIC) {
                totalCount
                nodes {
                  name
                  url
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe(({ data }: any) => {
        this.avatarUrl = data?.user?.avatarUrl || null;
        this.repositories =
          data?.user?.repositories?.nodes || ([] as Repository[]);
      });
  }
}

interface Repository {
  name: string;
  url: string;
}
