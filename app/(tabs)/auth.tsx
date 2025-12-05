import { HapticTab } from "@/components/haptic-tab";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Header } from "@react-navigation/elements";
import { Text } from "react-native";
export default function Authentication() {
    return (
        <>
        <ThemedView>
            <HapticTab
            />
            {/* <ThemedText type="title">Authentication Screen</ThemedText> */}
        </ThemedView>
        </>
    );
}