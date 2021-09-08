import Board from './board.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  template:
    '<div class="grid-container"> <div class="grid-item" (click)="markSpaceAndChangeTurn(i, value)" *ngFor="let value of board.boardValues; let i = index" [attr.data-index]="i"> {{ value }}</div></div>' +
    '<button (click)="clearBoard()">Start Game</button>' +
    '<div *ngIf="checkForWinner()"> {{ getWinner() }} has won the game!</div>',
  //'<div class="grid-container"> <div class="grid-item" (click)="value = board.getMarkAndChangeTurn()" *ngFor="let value of board.boardValues">{{ value }}</div></div>',
})
export class BoardComponent {
  board: Board = new Board();

  clearBoard() {
    this.board = new Board();
  }

  markSpaceAndChangeTurn(index: number, value: string) {
    if (!value) {
      if (this.board.isXTurn) {
        this.board.boardValues[index] = 'X';
      } else {
        this.board.boardValues[index] = 'O';
      }
      this.board.isXTurn = !this.board.isXTurn;
    }
  }

  checkForWinner() {
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[1] &&
      this.board.boardValues[1] == this.board.boardValues[2]
    ) {
      return true;
    }
    if (
      this.board.boardValues[3] &&
      this.board.boardValues[3] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[5]
    ) {
      return true;
    }
    if (
      this.board.boardValues[6] &&
      this.board.boardValues[6] == this.board.boardValues[7] &&
      this.board.boardValues[7] == this.board.boardValues[8]
    ) {
      return true;
    }
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[3] &&
      this.board.boardValues[3] == this.board.boardValues[6]
    ) {
      return true;
    }
    if (
      this.board.boardValues[1] &&
      this.board.boardValues[1] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[7]
    ) {
      return true;
    }
    if (
      this.board.boardValues[2] &&
      this.board.boardValues[2] == this.board.boardValues[5] &&
      this.board.boardValues[5] == this.board.boardValues[8]
    ) {
      return true;
    }
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[8]
    ) {
      return true;
    }
    if (
      this.board.boardValues[2] &&
      this.board.boardValues[2] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[6]
    ) {
      return true;
    }
    return false;
  }
  getWinner() {
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[1] &&
      this.board.boardValues[1] == this.board.boardValues[2]
    ) {
      return this.board.boardValues[0];
    }
    if (
      this.board.boardValues[3] &&
      this.board.boardValues[3] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[5]
    ) {
      return this.board.boardValues[3];
    }
    if (
      this.board.boardValues[6] &&
      this.board.boardValues[6] == this.board.boardValues[7] &&
      this.board.boardValues[7] == this.board.boardValues[8]
    ) {
      return this.board.boardValues[6];
    }
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[3] &&
      this.board.boardValues[3] == this.board.boardValues[6]
    ) {
      return this.board.boardValues[0];
    }
    if (
      this.board.boardValues[1] &&
      this.board.boardValues[1] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[7]
    ) {
      return this.board.boardValues[1];
    }
    if (
      this.board.boardValues[2] &&
      this.board.boardValues[2] == this.board.boardValues[5] &&
      this.board.boardValues[5] == this.board.boardValues[8]
    ) {
      return this.board.boardValues[2];
    }
    if (
      this.board.boardValues[0] &&
      this.board.boardValues[0] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[8]
    ) {
      return this.board.boardValues[0];
    }
    if (
      this.board.boardValues[2] &&
      this.board.boardValues[2] == this.board.boardValues[4] &&
      this.board.boardValues[4] == this.board.boardValues[6]
    ) {
      return this.board.boardValues[2];
    }
    return false;
  }
}
