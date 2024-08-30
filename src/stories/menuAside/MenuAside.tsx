import { Fragment } from "react";
import styles from "./MenuAside.module.css"
import stylesMenu from "../menu/Menu.module.css"
import { MenuTypes } from "../menu/Menu.types";
import { MenuMobile } from "../menuMobile";

export const MenuAside = ({ menuItems }: MenuTypes) => {

	return (
		<>
			{/* Desktop */}
			<div className={styles.asideMenuWrapper}>
				<div className={styles.asideMenu}>
					{menuItems && (menuItems.map((menuItem) => (
						menuItem.map((itemGroup) => (
							<Fragment key={`desktop${itemGroup.menuTitle}`}>
								<div className={stylesMenu.menuSubTitle}>{itemGroup.menuTitle}</div>
								<ul>
									{itemGroup.items.map(({ itemLinkText, itemLink, itemLinkType }) => (
										<li key={`desktopMenu-${itemGroup.menuTitle}-${itemLinkText}`}>
											{itemLinkType === "hash" && <a href={`/#/${itemLink}`}> {itemLinkText}</a>}
											{itemLinkType === "link" && <a href={`/${itemLink}`}> {itemLinkText}</a>}
											{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
										</li>
									))}
								</ul>
							</Fragment>
						)))))}
				</div>
			</div>

			<MenuMobile menuItems={menuItems} />
		</>
	);
};
