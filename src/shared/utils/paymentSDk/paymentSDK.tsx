
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { View, Button, TextInput, ActivityIndicator } from 'react-native';
import { PaymentSDKProps } from './types/types';

const PaymentSDK = forwardRef((props: PaymentSDKProps, ref) => {
    const { 
        apiKey, amount, currency, paymentMethod, customerEmail, customerPhone, 
        pin, accessToken, onPaymentSuccess, onPaymentError, onPaymentCancel 
    } = props;

    const [loading, setLoading] = useState(false);
    const [inputPin, setInputPin] = useState(pin || '');
    const [inputAccessToken, setInputAccessToken] = useState(accessToken || '');

    useImperativeHandle(ref, () => ({
        startTransaction: () => initiatePayment(),
        endTransaction: () => setLoading(false)
    }));

    const initiatePayment = () => {
        setLoading(true);

        if (currency === 'NGN' && paymentMethod.includes('ussd')) {
            // Handle USSD payment for Nigeria
            if (!inputPin && !inputAccessToken) {
                setLoading(false);
                onPaymentError({
                    status: 'failed',
                    transactionId: '',
                    message: 'PIN or Access Token is required for USSD payment.',
                });
                return;
            }

            // Simulate USSD payment processing with PIN or Access Token
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5;
                setLoading(false);
                if (isSuccess) {
                    onPaymentSuccess({
                        status: 'success',
                        transactionId: 'unique_ussd_transaction_id',
                        message: 'USSD Payment successful',
                        data: { amount, currency }
                    });
                } else {
                    onPaymentError({
                        status: 'failed',
                        transactionId: 'unique_ussd_transaction_id',
                        message: 'USSD Payment failed',
                    });
                }
            }, 2000);
        } else {
           
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5;
                setLoading(false);
                if (isSuccess) {
                    onPaymentSuccess({
                        status: 'success',
                        transactionId: 'unique_card_transaction_id',
                        message: 'Card Payment successful',
                        data: { amount, currency }
                    });
                } else {
                    onPaymentError({
                        status: 'failed',
                        transactionId: 'unique_card_transaction_id',
                        message: 'Card Payment failed',
                    });
                }
            }, 2000);
        }
    };

    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <>
                    {currency === 'NGN' && paymentMethod.includes('ussd') && (
                        <View>
                            <TextInput
                                placeholder="Enter PIN"
                                value={inputPin}
                                onChangeText={setInputPin}
                                secureTextEntry
                            />
                            <TextInput
                                placeholder="Enter Access Token"
                                value={inputAccessToken}
                                onChangeText={setInputAccessToken}
                                secureTextEntry
                            />
                        </View>
                    )}
                    <Button title="Pay Now" onPress={initiatePayment} />
                </>
            )}
        </View>
    );
});

export default PaymentSDK;
