import {Center, Stack, Title} from '@mantine/core'
import './Header.css'

function Header() {

    return (
        <Center>
            <Stack gap="xs">
                <Title order={1} size={100}>Trunc8</Title>
                <Title order={3} size={20}>a URL Shortener</Title>
            </Stack>
        </Center>
    )
}

export default Header