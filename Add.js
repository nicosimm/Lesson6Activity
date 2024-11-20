import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');

    return (
        <View>
            <Text >Letter:</Text>
            <TextInput
                maxLength={1}
                value={letter}
                onChangeText={(text) => setLetter(text)}
                placeholder="Enter a letter"
            />
            <Text>Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
                value={letterType}
            />
            <Button title="Submit" onPress={()=> {
                let item = {key:letter};
                let indexnum=0;
                if (letterType === "Consonants") {
                    indexnum = 1;
                }

                datasource[indexnum].data.push({ key: letter });
                navigation.navigate("Home");
            }} />
        </View>
    );
};
export default Add;
