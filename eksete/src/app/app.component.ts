import { Component } from '@angular/core';
interface Karta {
  ikonka: string;
  otoceno: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Router';

  karticky: Karta[] = [
    {ikonka: 'eminemJeShit', otoceno: false},
    {ikonka: 'TrappyPotter', otoceno: false},
    {ikonka: 'FreeMarika', otoceno: false},
    {ikonka: 'VrtSeK**vo', otoceno: false},
    {ikonka: 'Cyril Baroko', otoceno: false},
    {ikonka: 'Rapublika', otoceno: false},
    {ikonka: 'LSD Badboy Berlin', otoceno: false},
    {ikonka: 'Kamehamea', otoceno: false},
  ];

  savedCard: Karta | null = null;

  otocit(clicknutaKarticka: Karta): void {
    if (clicknutaKarticka.otoceno === true) {
      return;
    }
    if (this.savedCard === null) {
      clicknutaKarticka.otoceno = true;
      this.savedCard = clicknutaKarticka;
    } else {
      if (this.savedCard !== clicknutaKarticka) {
        clicknutaKarticka.otoceno = true;
        if (clicknutaKarticka.ikonka !== this.savedCard.ikonka) {
          const savedCard = this.savedCard;
          setTimeout(() => {
            savedCard.otoceno = false;
            clicknutaKarticka.otoceno = false;
          }, 1000);
        }
        this.savedCard = null;
      }
    }
  }
}
