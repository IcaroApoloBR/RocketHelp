import { Text, VStack } from 'native-base';
import { useRoute } from '@react-navigation/native'

import { Header } from '../components/Header';

type RouteParams = {
    orderId: string;
}

export function Details() {
    const route = useRoute();
    const { orderId } = route.params as RouteParams;
    const { } = route.params;
    return (
        <VStack flex={1} bg="gray.700">
            <Header title="Solicitação" />
            <Text color="white">
                {orderId}
            </Text>
        </VStack>
    );
}