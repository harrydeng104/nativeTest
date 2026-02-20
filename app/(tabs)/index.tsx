import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
        <Text className="text-5xl font-bold text-primary">Settings</Text>
        <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Press Me"
        />
        {/* <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>

        </ScrollView> */}
    </View>
  );
}
