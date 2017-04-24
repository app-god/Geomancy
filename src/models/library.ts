
export interface LibraryTopic {
    name: string // Houses
    loadItems(): LibraryItem[]
}

export interface LibraryItem {
    name: string // House 1
    page: string // HousePage
}

export interface LibraryItemPage {
    item: any
}
