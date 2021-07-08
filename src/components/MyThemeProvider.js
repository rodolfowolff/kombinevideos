import { ThemeProvider } from '@material-ui/core/styles';
import { createThemeUi } from 'src/theme';
import useSettings from 'src/hooks/useSettings';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  const theme = createThemeUi({ theme: settings.theme });

  return <ThemeProvider theme={ theme }>{ children }</ThemeProvider>;
}

export default MyThemeProvider;
