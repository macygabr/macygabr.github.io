import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { _langs, _notifications } from 'src/_mock';
import { Iconify } from 'src/components/iconify';
import { Main } from './main';
import { layoutClasses } from '../classes';
import { NavMobile, NavDesktop } from './nav';
import { navData } from '../config-nav-dashboard';
import { Searchbar } from '../components/searchbar';
import { _workspaces } from '../config-nav-workspace';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { AccountPopover } from '../components/account-popover';
import { LanguagePopover } from '../components/language-popover';
import { NotificationsPopover } from '../components/notifications-popover';

import { UserInfo } from '../../lib/models/userInfo';
import userClient from '../../lib/user/user';

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function DashboardLayout({ sx, children, header }: DashboardLayoutProps) {
  const theme = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const layoutQuery: Breakpoint = 'lg';
  const [user, setUser] = useState<UserInfo | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Try to load user info
        try {
          const userInfo = await userClient.getUserInfo();
          setUser(userInfo);
        } catch (userError) {
          console.error('Ошибка при загрузке данных пользователя:', userError);
          setError('Не удалось загрузить данные пользователя');
        }
        
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Iconify icon="eos-icons:loading" width={48} height={48} />
      </Box>
    );
  }

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{
            container: {
              maxWidth: false,
              sx: { px: { [layoutQuery]: 5 } },
            },
          }}
          sx={header?.sx}
          slots={{
            topArea: error ? (
              <Alert severity="error" sx={{ borderRadius: 0 }}>
                {error}
              </Alert>
            ) : null,
            leftArea: (
              <>
                <MenuButton
                  onClick={() => setNavOpen(true)}
                  sx={{
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={navOpen}
                  onClose={() => setNavOpen(false)}
                  workspaces={_workspaces}
                />
              </>
            ),
            rightArea: (
              <Box gap={1} display="flex" alignItems="center">
                {user ? (
                  <>
                    <Searchbar />
                    <LanguagePopover data={_langs} />
                    <NotificationsPopover data={_notifications} />
                    <AccountPopover
                      user={user}
                      data={[
                        {
                          label: 'Home',
                          href: '/',
                          icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
                        },
                        {
                          label: 'Profile',
                          href: '#',
                          icon: <Iconify width={22} icon="solar:shield-keyhole-bold-duotone" />,
                        },
                        {
                          label: 'Settings',
                          href: '#',
                          icon: <Iconify width={22} icon="solar:settings-bold-duotone" />,
                        },
                      ]}
                    />
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => navigate('/sign-in')}>
                    Sign In
                  </Button>
                )}
              </Box>
            )
          }}
        />
      }
      /** **************************************
       * Sidebar
       *************************************** */
      sidebarSection={
        <NavDesktop data={navData} layoutQuery={layoutQuery} workspaces={_workspaces} />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-nav-vertical-width': '300px',
        '--layout-dashboard-content-pt': theme.spacing(1),
        '--layout-dashboard-content-pb': theme.spacing(8),
        '--layout-dashboard-content-px': theme.spacing(5),
      }}
      sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            pl: 'var(--layout-nav-vertical-width)',
          },
        },
        ...sx,
      }}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
