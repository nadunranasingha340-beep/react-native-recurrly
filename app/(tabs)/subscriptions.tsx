import {Text} from 'react-native'
import {SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNsafeAreaView);

const Subscriptions = () => {
    return (
        <SafeAreaView className='flex-1 bg-background p-5'>
            <Text>Subscriptions</Text>
        </SafeAreaView>
    )
}
export default Subscriptions
