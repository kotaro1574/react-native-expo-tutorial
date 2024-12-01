import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "タブホーム" }} />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
