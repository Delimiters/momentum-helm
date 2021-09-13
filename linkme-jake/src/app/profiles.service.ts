import { Injectable } from '@angular/core';

export default class Profile {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connections: number[] = []
  ) {}

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const PROFILES_KEY = 'profiles';

function decodeProfile(json: Profile): Profile {
  let profile = Object.create(Profile.prototype);
  return Object.assign(profile, json);
}

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  profiles: Profile[] = [];
  getDefaultProfiles() {
    return [
      new Profile(1, 'David', 'Rasch', 'Mr.', [
        'Developer 2020',
        'Angular Instructor 2021',
      ]),
      new Profile(2, 'Alan', 'Cox', 'Mr.', ['CTO 2020-2021']),
      new Profile(3, 'Dee', 'Meyers', 'Ms.', [
        'Student 2020',
        'Developer 2021',
      ]),
    ];
  }

  constructor() {
    this.load();
  }

  load() {
    this.profiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]').map(
      (obj: Profile) => decodeProfile(obj)
    );
    if (this.profiles.length == 0) {
      this.profiles = this.getDefaultProfiles();
    }
  }

  save() {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(this.profiles));
  }

  getProfiles() {
    console.log(this.profiles);
    return this.profiles;
  }
  addProfile(profile: Profile) {
    this.profiles.push(profile);
  }
  getProfile(index: number) {
    console.log(index);
    console.log(this.profiles);
    return this.profiles.find((profile) => profile.id == index);
  }
  addExperience(index: number, experience: string) {
    const profile = this.getProfile(index);

    if (profile) {
      const exp = profile.experience.push(experience);
      this.save();
      return exp;
    } else {
      throw 'Profile does not exist';
    }
  }
  connect(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);
    if (!firstProfile || !secondProfile) {
      throw 'Tried connecting to non-existant profile(s)';
    }

    if (!firstProfile.connections.find((num) => num == second)) {
      firstProfile.connections.push(second);
    }
    if (!secondProfile.connections.find((num) => num == first)) {
      secondProfile.connections.push(first);
    }
    this.save();
  }
  disconnect(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);

    if (!firstProfile || !secondProfile) {
      throw 'Tried disconnecting non-existant profile(s)';
    }

    let found = firstProfile.connections.findIndex((num) => num == second);
    if (found >= 0) {
      firstProfile.connections.splice(found, 1);
    }

    found = secondProfile.connections.findIndex((num) => num == first);
    if (found >= 0) {
      secondProfile.connections.splice(found, 1);
    }
    this.save();
  }
  isConnected(first: number, second: number) {
    const firstProfile = this.getProfile(first);
    const secondProfile = this.getProfile(second);

    if (!firstProfile || !secondProfile) {
      throw 'Tried checking connections for non-existant profile(s)';
    }

    return firstProfile.connections.find((num) => num == second);
  }
}
