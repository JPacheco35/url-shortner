// import './main.css'
import './urlinput.css'

import {Button, Center, Group, Input, Stack, TextInput, Title} from '@mantine/core';

function URLInput() {
    return (
        <Group gap={0} grow={false}>
            <TextInput
                size="xl"
                radius="lg"
                placeholder="enter your URL..."
                style={{ flex: 4 }}
            />
            <Button
                size="xl"
                radius="lg"
                style={{ flex: 1 }}
                variant={"light"}
            >
                Submit
            </Button>
        </Group>
    );
}
export default URLInput;