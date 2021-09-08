export default class Board {
  boardValues: string[];
  isXTurn: boolean;

  constructor() {
    this.boardValues = ['', '', '', '', '', '', '', '', ''];
    this.isXTurn = true;
  }
}
