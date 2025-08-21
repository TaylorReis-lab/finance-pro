import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FinexaLogo } from '../components/brand/Logo';
import AppTheme from '../theme/AppTheme';

// Twitter and GitHub icons with weaker color and hover animation
const TwitterIcon = () => (
  <svg width="20" height="20" fill="#000000" viewBox="0 0 24 24">
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.724-.674 1.562-.674 2.457 0 1.698.864 3.196 2.174 4.073-.803-.026-1.559-.246-2.22-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.785-.023-1.169-.067 2.169 1.394 4.742 2.212 7.514 2.212 9.018 0 13.949-7.474 13.949-13.949 0-.213 0-.425-.015-.636.961-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" fill="#000000" viewBox="0 0 24 24">
    <path d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.645.35-1.087.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 7.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.335 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.525-4.475-10-10-10z" />
  </svg>
);

// Componente de Loading com animação da logo balançando
const LoadingAnimation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse 1.5s ease-in-out infinite',
        '@keyframes pulse': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(-5deg)' },
          '50%': { transform: 'scale(1.15) rotate(0deg)' },
          '75%': { transform: 'scale(1.1) rotate(5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          mt: 1, 
          color: '#1e90ff',
          fontWeight: 'bold',
          animation: 'fadeInOut 1.5s ease-in-out infinite',
          '@keyframes fadeInOut': {
            '0%': { opacity: 0.5 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.5 },
          }
        }}
      >
        <FinexaLogo width={60} height={30} />
      </Typography>
    </Box>
  );
};

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // delay para animação de entrada
  }, []);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula um processo de login
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign in with:', { email, password });
    }, 2000);
  };

  const handleSSOSignIn = (provider: string) => {
    setIsLoading(true);
    
    // Simula um processo de SSO
    setTimeout(() => {
      setIsLoading(false);
      console.log('Sign in with SSO:', provider);
    }, 2000);
  };

  const handleGoBack = () => {
    // Lógica para voltar à tela inicial
    console.log('Voltando para a tela inicial');
    window.location.href = '/'; // ou use seu roteador preferido
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box
        sx={theme => ({
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
          background: 'linear-gradient(45deg, #FFFFFF 50%, #000000 50%)',
          position: 'relative',
        })}
      >
        {/* Botão Voltar no canto superior esquerdo */}
        <Fade in={loaded} timeout={1000}>
          <IconButton
            onClick={handleGoBack}
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              background: '#000',
              color: 'white',
              width: 40,
              height: 40,
              '&:hover': {
                background: 'linear-gradient(180deg, #42A5F5 0%, #155EEF 100%)',
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              },
              transition: 'all 0.3s ease',
              zIndex: 10,
            }}
          >
            <ArrowBack />
          </IconButton>
        </Fade>

        <Grow in={loaded} timeout={1000}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, marginRight: 5 }}>
              <FinexaLogo width={40} height={40} />
            </Box>
            <Fade in={loaded} timeout={1200}>
              <Box
                component="form"
                sx={{
                  mt: 1,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: '#000000',
                  minWidth: 340,
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                {/* Overlay de carregamento */}
                {isLoading && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      zIndex: 2,
                    }}
                  >
                    <LoadingAnimation />
                  </Box>
                )}
                
                <Stack spacing={2}>
                  <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Sign in to your account
                  </Typography>
                  <Typography align="center" sx={{ color: '#bbb', mb: 2 }}>
                    Don't have an account?{' '}
                    <a
                      href="#"
                      style={{ color: '#155EEF', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      Create one.
                    </a>
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={() => handleSSOSignIn('twitter')}
                      disabled={isLoading}
                      sx={{
                        flex: 1,
                        position: 'relative',
                        background: '#000000',
                        color: 'white',
                        overflow: 'hidden',
                        '&:hover': {
                          '&::before': {
                            height: '100%',
                            background: 'linear-gradient(180deg, #42A5F5 0%, #155EEF 100%)',
                            '& + *': {
                              fill: 'white',
                            },
                          },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: 0,
                          background: 'linear-gradient(180deg, #42A5F5 0%, #155EEF 100%)',
                          transition: 'height 0.5s ease',
                          zIndex: 0,
                        },
                        '&:not(:hover)': {
                          '&::before': {
                            height: 0,
                            transition: 'height 0.5s ease',
                          },
                        },
                        '& > *': {
                          position: 'relative',
                          zIndex: 1,
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TwitterIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleSSOSignIn('github')}
                      disabled={isLoading}
                      sx={{
                        flex: 1,
                        position: 'relative',
                        background: '#000',
                        color: 'white',
                        overflow: 'hidden',
                        '&:hover': {
                          '&::before': {
                            height: '100%',
                            background: 'linear-gradient(180deg, #42A5F5 0%, #155EEF 100%)',
                            '& + *': {
                              fill: 'white',
                            },
                          },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: 0,
                          background: 'linear-gradient(180deg, #42A5F5 0%, #155EEF 100%)',
                          transition: 'height 0.5s ease',
                          zIndex: 0,
                        },
                        '&:not(:hover)': {
                          '&::before': {
                            height: 0,
                            transition: 'height 0.5s ease',
                          },
                        },
                        '& > *': {
                          position: 'relative',
                          zIndex: 1,
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <GitHubIcon />
                    </Button>
                  </Stack>
                  <Typography align="center" sx={{ color: '#888', mb: 2 }}>
                    OR
                  </Typography>
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    fullWidth
                    disabled={isLoading}
                    InputProps={{
                      sx: {
                        height: 50,
                        color: 'white',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                          '&:hover fieldset': { borderColor: '#4dabf7' },
                          '&.Mui-focused fieldset': { borderColor: '#1e90ff' },
                        },
                      },
                    }}
                    InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                  <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    fullWidth
                    disabled={isLoading}
                    InputProps={{
                      sx: {
                        height: 50,
                        color: 'white',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                          '&:hover fieldset': { borderColor: '#4dabf7' },
                          '&.Mui-focused fieldset': { borderColor: '#1e90ff' },
                        },
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            disabled={isLoading}
                            sx={{ color: 'rgba(255,255,255,0.7)' }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }}
                  />
                  <Typography align="right" sx={{ color: '#1e90ff', mb: 2, fontSize: '0.875rem' }}>
                    <a 
                      href="#" 
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      Forgot?
                    </a>
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    onClick={handleSignIn}
                    disabled={isLoading}
                    sx={{
                      height: 48,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #1e90ff 0%, #00b7eb 100%)',
                      boxShadow: '0 4px 14px rgba(30,144,255,0.4)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #00b7eb 0%, #1e90ff 100%)',
                      },
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {isLoading ? (
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          animation: 'pulse 1.5s ease-in-out infinite',
                          '@keyframes pulse': {
                            '0%': { opacity: 0.7 },
                            '50%': { opacity: 1 },
                            '100%': { opacity: 0.7 },
                          }
                        }}
                      >
                        Carregando...
                      </Box>
                    ) : (
                      'Sign in'
                    )}
                  </Button>
                  <Typography align="center" sx={{ color: '#bbb', fontSize: '0.75rem', mt: 1 }}>
                    By signing in, you agree to our{' '}
                    <a
                      href="#"
                      style={{ color: '#1e90ff', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a
                      href="#"
                      style={{ color: '#1e90ff', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                      Privacy Policy
                    </a>
                    .
                  </Typography>
                </Stack>
              </Box>
            </Fade>
          </Box>
        </Grow>
      </Box>
    </AppTheme>
  );
}