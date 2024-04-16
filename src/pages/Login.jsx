import React from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';

function Login() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text>Login to Your Account</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue">Login</Button>
      </VStack>
    </Box>
  );
}

export default Login;