
import { Button, Center, Container, LoadingOverlay, Paper, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Head from 'next/head'
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import { useState } from 'react';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    })
    const handleSubmit = () => {
        console.log(form.values)
    }
    return (
        <>
        <Head>
            <title>Register</title>

        </Head>
        <Center>
            <Paper padding='sm' shadow='sm'>

            <form onSubmit={form.onSubmit(handleSubmit)}>
            <LoadingOverlay visible={loading} />
            <TextInput
                mt="md"
                required
                placeholder="Your email"
                label="Email"
                icon={<EnvelopeClosedIcon />}
                {...form.getInputProps('email')}
                />
                <Button type='submit'>Submit</Button>

            </form>
            </Paper>
        </Center>
        </>
    )
}

export default Register
