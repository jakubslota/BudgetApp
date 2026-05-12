import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../theme";

export default function DashboardScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.appName}>BudgetApp</Text>
			<Text style={styles.greeting}>Dzień dobry</Text>

			<View style={styles.balanceCard}>
				<Text style={styles.balanceLabel}>Saldo całkowite</Text>
				<Text style={styles.balanceValue}>0,00 zł</Text>
				<Text style={styles.balanceHint}>
					Twoja aktualna sytuacja finansowa
				</Text>
			</View>

			<View style={styles.summaryRow}>
				<View style={[styles.summaryCard, styles.incomeCard]}>
					<Text style={styles.summaryLabel}>
						Przychody w tym miesiącu
					</Text>
					<Text style={[styles.summaryValue, styles.incomeText]}>
						0,00 zł
					</Text>
				</View>

				<View style={[styles.summaryCard, styles.expenseCard]}>
					<Text style={styles.summaryLabel}>
						Wydatki w tym miesiącu
					</Text>
					<Text style={[styles.summaryValue, styles.expenseText]}>
						0,00 zł
					</Text>
				</View>
			</View>

			<View style={styles.card}>
				<Text style={styles.sectionTitle}>Ostatnie transakcje</Text>
				<Text style={styles.emptyText}>
					Brak transakcji. Dodaj pierwszy wydatek albo przychód.
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
	appName: {
		fontSize: 28,
		fontWeight: "800",
		color: colors.primary,
	},
	greeting: {
		marginTop: spacing.xs,
		marginBottom: spacing.lg,
		fontSize: 16,
		color: colors.textMuted,
	},
	balanceCard: {
		padding: spacing.xl,
		borderRadius: radius.xl,
		backgroundColor: colors.primary,
	},
	balanceLabel: {
		fontSize: 14,
		color: "#DBEAFE",
	},
	balanceValue: {
		marginTop: spacing.sm,
		fontSize: 34,
		fontWeight: "800",
		color: colors.card,
	},
	balanceHint: {
		marginTop: spacing.sm,
		fontSize: 13,
		color: "#DBEAFE",
	},
	summaryRow: {
		flexDirection: "row",
		gap: spacing.md,
		marginTop: spacing.lg,
	},
	summaryCard: {
		flex: 1,
		padding: spacing.lg,
		borderRadius: radius.lg,
	},
	incomeCard: {
		backgroundColor: colors.incomeLight,
	},
	expenseCard: {
		backgroundColor: colors.expenseLight,
	},
	summaryLabel: {
		fontSize: 13,
		color: colors.textMuted,
	},
	summaryValue: {
		marginTop: spacing.sm,
		fontSize: 18,
		fontWeight: "800",
	},
	incomeText: {
		color: colors.income,
	},
	expenseText: {
		color: colors.expense,
	},
	card: {
		marginTop: spacing.lg,
		padding: spacing.lg,
		borderRadius: radius.lg,
		backgroundColor: colors.card,
		borderWidth: 1,
		borderColor: colors.border,
	},
	sectionTitle: {
		marginBottom: spacing.sm,
		fontSize: 18,
		fontWeight: "700",
		color: colors.text,
	},
	emptyText: {
		fontSize: 14,
		lineHeight: 20,
		color: colors.textMuted,
	},
});
