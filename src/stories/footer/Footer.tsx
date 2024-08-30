import styles from "./Footer.module.css"
import { Text } from "../text"

export const Footer = () => {
	return (
		<>
			<footer>
				<div className={styles.footerPush}></div>
				<div className={styles.footerContainer}>
					<div className={styles.footerContent}>
						<Text kind="p">
							© Mariusz Najwer
						</Text>
					</div>
				</div>
			</footer>
		</>
	)
};