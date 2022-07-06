import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserRow from './UserRow';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Circles } from 'react-loader-spinner';

const tHeadItem = [
  { title: '№', width: '5%' },
  { title: 'ID', width: '18%' },
  { title: 'Name', width: '13%' },
  { title: 'Last Name', width: '13%' },
  { title: 'Phone', width: '13%' },
  { title: 'e-mail', width: '13%' },
  { title: 'Actions', width: '25%' },
];

const UsersTable = ({ editUser }) => {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tHeadItem.map((el) => (
              <TableCell key={el.title} sx={{ textTransform: 'uppercase', width: el.width }}>
                {el.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {!isLoading ? (
          <TableBody>
            {users.map((person, index) => (
              <UserRow editUser={editUser} person={person} index={index} key={person._id} />
            ))}
          </TableBody>
        ) : (
          <></>
        )}
      </Table>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ margin: '0 auto' }}>
            <Circles color="#00BFFF" height={80} width={80} />
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default UsersTable;
