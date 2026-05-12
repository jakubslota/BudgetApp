import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "../../src/theme/colors";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.textMuted,
				tabBarStyle: {
					height: 68,
					paddingTop: 8,
					paddingBottom: 10,
					backgroundColor: colors.card,
					borderTopColor: colors.border,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "600",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Start",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="home-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="history"
				options={{
					title: "Historia",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="time-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="add"
				options={{
					title: "Dodaj",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="add-circle-outline"
							size={size + 4}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="reports"
				options={{
					title: "Raporty",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="pie-chart-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="settings"
				options={{
					title: "Ustawienia",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="settings-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
