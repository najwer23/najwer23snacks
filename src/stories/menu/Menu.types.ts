interface ItemLink {
	itemLink: string;
	itemLinkText: string;
	itemLinkType: "hash" | "link" | "linkOut";
}

interface ItemGroup {
	menuTitle: string;
	items: ItemLink[];
}

export interface MenuTypes {
	menuItems: ItemGroup[][];
}
