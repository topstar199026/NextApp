import { Box, Card, CardContent, Container, Divider, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import Link from 'next/link'
import JWTLogin from 'src/components/Auth/JWTLogin'

const LoginPage: FC = () => {

  useEffect(() => {
    
	}, [])

  return (
    <Container
      maxWidth="sm"
    >
      <Box
        mb={8}
        display="flex"
        justifyContent="center"
      >
      </Box>
      <Card>
        <CardContent>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            mb={3}
          >
            <div>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h3"
              >
                Sign in
              </Typography>
            </div>
          </Box>
          <Box
            flexGrow={1}
            mt={3}
          >
            <JWTLogin />
          </Box>
          <Box my={3}>
            <Divider />
          </Box>
          <Link 
            href="/register"
          >
            Create new account
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default LoginPage
