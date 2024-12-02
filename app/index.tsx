import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="(stacks)">Tabs</Link>
    </View>
  );
}
