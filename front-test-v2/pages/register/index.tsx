import { Box, Card, CardContent, Container, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import JWTRegister from 'src/components/Auth/JWTRegister'

const RegisterPage: FC = () => {

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
                Create Account
              </Typography>
            </div>
          </Box>
          <Box
            flexGrow={1}
            mt={3}
          >
            <JWTRegister />
          </Box>
          <Box my={3}>
            <Divider />
          </Box>
          <Link 
            href="/login"
          >
            Login
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default RegisterPage
