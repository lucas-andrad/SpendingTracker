import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant="h5" color="secondary">
                    SpendingTracker
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;