import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
export const AppModal = ({param}) => {
    const {title, item, show, onClose, addTo, selectArr, component} = param;
  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={show}
        maxWidth='auto'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {title} ({item.SECNAME})
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {component}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
            Закрыть
          </Button>
          <Button disabled={selectArr.find(el => el.SECID === item.SECID) ? true : false} onClick={() => addTo(item)}>
            Добавить в портфель
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}