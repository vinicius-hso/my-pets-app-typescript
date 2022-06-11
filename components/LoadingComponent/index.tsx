import { View, ActivityIndicator, Text } from "react-native";

interface ILoadingProps {
  operation?: string;
}

const Loading: React.FC<ILoadingProps> = ({ operation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFC125",
      }}
    >
      {operation && (
        <Text
          style={{
            margin: 20,
          }}
        >
          {operation}
        </Text>
      )}

      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default Loading;
