import { Divider, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosIntance from "../../utils/axios-configured";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  capitalizeText: {
    textTransform: "capitalize",
  },
  spacing: {
    marginTop: "10px",
  },
  accepted: {
    border: "1px solid #4caf50",
    borderRadius: '20px',
    padding: "4px 6px",
    color: '#4caf50',
  },
  pending: {
    border: "1px solid #ff9800",
    borderRadius: '20px',
    padding: "4px 6px",
    color: '#f57c00',
  },
  rejected: {
    border: "1px solid red",
    borderRadius: '20px',
    padding: "4px 6px",
    color: 'red',
  },
}));

export default function MyReservation() {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.loadingReducer);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    axiosIntance
      .get("/api/v1/reservations/customers")
      .then((res) => {
        setReservation(res?.data?.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);
  return (
    <Grid>
      <h4>My Reservations</h4>
      <Divider />
      <Grid container direction="row" spacing={2} className={classes.spacing}>
        {loading &&
          [1, 2, 3, 4, 5].map((item, index) => (
            <Skeleton
              key={index}
              variant="rect"
              width={700}
              height={40}
              className={classes.spacing}
            />
          ))}
        {!loading && reservation && (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Services</TableCell>
                  <TableCell align="center">Number of People</TableCell>
                  <TableCell align="center">Start Time</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservation.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.capitalizeText}
                    >
                      {item.services}
                    </TableCell>
                    <TableCell align="center">{item.numberOfPeople}</TableCell>
                    <TableCell align="center">
                      {new Date(item.startTime).toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.capitalizeText}
                    >
                      <span className={item.status === "accepted" ? classes.accepted : item.status === "pending" ? classes.pending: classes.rejected}>
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
}
