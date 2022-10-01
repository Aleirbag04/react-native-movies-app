
import { useState } from "react";
import { Box, Center, Select, CheckIcon, Text } from "native-base";

const Selector = props => {
 const [selected, setSelected] = useState();
 const { options , onSelect, label} = props;

    return (
    <Center>
        <Box maxW='300'>
        <Text fontSize='sm' pb={1} >
            {label}
            {label === 'Select option' ? null :
            <Text fontSize="xs" _light={{color: "red.500",}}>*</Text>
            }

        </Text>
            <Select
                selectedValue={selected}
                minWidth={200}
                backgroundColor='white'
                fontSize='sm'
                accessibilityLabel="Select a category"
                defaultValue={options[0].value}
                _selectedItem={{
                    bg: '#fae8ff',
                    endIcon: <CheckIcon size={4} />,
                }}
                onValueChange={option => {
                    setSelected( option);
                    onSelect(option);}
                }
            >
                {options.map((option, index) => {
                return (
                    <Select.Item
                    key={index}
                    label={option.label}
                    value={option.value}
                    />
                );
                })}


            </Select>
        </Box>
    </Center>
    );
}

export default Selector;