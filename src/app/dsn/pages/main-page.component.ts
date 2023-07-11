import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DsnService } from '../services/dsn.service';

@Component({
  selector: 'app-dsn-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dsnService: DsnService) {}

  get characters(): Character[] {
    return [...this.dsnService.characters];
  }
  onDeleteCharacter(id: string): void {
    this.dsnService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character): void {
    this.dsnService.addCharacter(character);
  }
}
