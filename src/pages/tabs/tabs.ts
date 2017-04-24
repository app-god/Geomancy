import { IonicPage } from "ionic-angular";
import { Component } from '@angular/core';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: string = 'NewPage';
  tab2Root: string = 'LibraryPage';
  tab3Root: string = 'HistoryPage';

  constructor() {

  }
}
