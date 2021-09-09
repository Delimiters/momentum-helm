export default class Profile {
  constructor(
    // public profileId: number,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connections: Profile[] = []
  ) {}
}

export const profiles = [
  new Profile('David', 'Rasch', 'Mr.', [
    'Developer 2020',
    'Angular Instructor 2021',
  ]),
  new Profile('Alan', 'Cox', 'Mr.', ['CTO 2020-2021']),
  new Profile('Dee', 'Meyers', 'Ms.', ['Student 2020', 'Developer 2021']),
  new Profile('Jake', 'Haley', 'Mr.', ['Student 3090', 'Developer 2029']),
  new Profile('Big', 'Jerk', 'Mr.', ['Student 1805', 'Landlord 1823']),
];
