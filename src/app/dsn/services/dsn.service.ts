import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DsnService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: '',
      power: '',
    },
    {
      id: uuid(),
      name: '',
      power: '',
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
  constructor() {}
}
