import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react'

const ExpenseList = () => {
    return (
        <Box>
            <List>
                <ListItem>
                    <ListItemText color='secondary'>
                        Item
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText color='secondary'>
                    Item
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText color='secondary'>
                    Item
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText color='secondary'>
                    Item
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
    )
}

export default ExpenseList;