import { Fragment, useEffect, useState } from "react";
import styles from "./MenuMobile.module.css"
import stylesMenu from "../menu/Menu.module.css"
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { MenuTypes } from "../menu/Menu.types";
import { Button } from "../button";

export const MenuMobile = ({ menuItems }: MenuTypes) => {
	const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
	const [width] = useWindowSize();

	useEffect(() => {
		if (width >= 1199.98) {
			setMenuMobileOpen(false);
			document.body.classList.remove(styles.menuOpen);
		}
	}, [width])

	useEffect(() => {
		if (menuMobileOpen) {
			document.body.classList.add(styles.menuOpen);
		} else {
			document.body.classList.remove(styles.menuOpen);
		}
	}, [menuMobileOpen]);

	return (
		<>
			<div className={[styles.menuMobile, menuMobileOpen && styles.open].join(' ')}>
				{menuItems && (menuItems.map((menuItem) => (
					menuItem.map((itemGroup) => (
						<Fragment key={`mobile${itemGroup.menuTitle}`}>
							<div className={stylesMenu.menuSubTitle}>{itemGroup.menuTitle}</div>
							<ul>
								{itemGroup.items.map(({ itemLinkText, itemLink, itemLinkType }) => (
									<li key={`MobileMenu-${itemGroup.menuTitle}-${itemLinkText}`} >
										{itemLinkType === "hash" && <a href={`/#/${itemLink}`} onClick={() => { setMenuMobileOpen(false) }} > {itemLinkText}</a>}
										{itemLinkType === "link" && <a href={`/${itemLink}`} onClick={() => { setMenuMobileOpen(false) }}> {itemLinkText}</a>}
										{itemLinkType === "linkOut" && <a target="_blank" rel="noopener noreferrer" href={`${itemLink}`}> {itemLinkText}</a>}
									</li>
								))}
							</ul>
						</Fragment>
					)))))}
			</div>

			<div className={[styles.menuMobileButton, menuMobileOpen && styles.open].join(' ')} >
				<Button
					text={"Menu"}
					type={"button"}
					ariaLabel={menuMobileOpen ? "close menu" : "open menu"}
					onClick={() => {
						setMenuMobileOpen(!menuMobileOpen)
					}}
				/>
			</div>
		</>
	);
};
