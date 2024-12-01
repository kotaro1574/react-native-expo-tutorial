import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Stack Index page</Text>
      <Link href="/(stacks)/profile">Profile</Link>
    </View>
  );
}
