import { Sidebar } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const CustomSidebar = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <Sidebar
      sx={{
        "&.MuiDrawer-root": {
          height: 'auto'
        },
        "& .RaSidebar-fixed": {
          position: 'sticky',
        },
        "& .RaMenu-open": {
          gap: '10px'
        },
        "& .MuiDrawer-paper": {
          backgroundColor: "#2A9D8F",
          height: '100%',
          paddingTop: isSmall ? '3rem' : '20px'
        },
        "& .MuiDrawer-paper a": {
          paddingTop: '15px',
          paddingBottom: '15px',
          color: 'white'
        },
        "& .MuiDrawer-paper .MuiListItemIcon-root": {
          color: 'white'
        }
        
      }}
      {...props}
    />
  )
};

export default CustomSidebar;