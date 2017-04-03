import { Component } from '@angular/core';

import { NewPage } from '../new/new';
import { LibraryPage } from '../library/library';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewPage;
  tab2Root: any = LibraryPage;
  tab3Root: any = HistoryPage;

  constructor() {

  }
}
