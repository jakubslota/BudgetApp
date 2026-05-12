import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../theme";

type ScreenPlaceholderProps = {
	title: string;
	subtitle: string;
};

export function ScreenPlaceholder({ title, subtitle }: ScreenPlaceholderProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>{subtitle}</Text>
				<Text style={styles.cardText}>
					Ten ekran zostanie rozbudowany w kolejnych etapach projektu
					BudgetApp.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 56,
		paddingHorizontal: spacing.lg,
		backgroundColor: colors.background,
	},
	title: {
		marginBottom: spacing.lg,
		fontSize: 28,
		fontWeight: "800",
		color: colors.primary,
	},
	card: {
		padding: spacing.lg,
		borderRadius: radius.lg,
		backgroundColor: colors.card,
		borderWidth: 1,
		borderColor: colors.border,
	},
	cardTitle: {
		marginBottom: spacing.sm,
		fontSize: 18,
		fontWeight: "700",
		color: colors.text,
	},
	cardText: {
		fontSize: 14,
		lineHeight: 20,
		color: colors.textMuted,
	},
});
