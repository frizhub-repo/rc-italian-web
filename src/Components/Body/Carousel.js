import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { reserveTable } from "../../actions/reserveTableActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useUserContext } from "../../Context/userContext";
import { Spinner } from "react-bootstrap";

const useStyle = makeStyles((theme) => ({
  numberOfPeople: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  root: {
    width: "100%",
    maxWidth: "440px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  date: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    border: "1px solid lightgrey",
    borderRadius: "0px",
  },
  activeColor: {
    backgroundColor: "#C8A97E",
    color: "white",
  },
  tablReserv: {
    fontSize: "20px",
  },
  numberRoot: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "20px",
  },
  numberButtonRoot: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
  numberButton: {
    border: "1px solid lightgray",
    width: "55px",
    height: "35px",
    marginRight: "10px",
  },
  dateRoot: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "20px",
    width: "100%",
  },
  dateText: {
    display: "flex",
    alignItems: "center",
  },
  otherDate: {
    fontSize: "13px",
  },
  calendarSpacing: {
    marginLeft: "5px",
  },
  calendarIcon: {
    width: "20px",
  },
  dateButtonRoot: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    width: "100%",
  },
  dateButton: {
    border: "1px solid lightgray",
    height: "35px",
    marginRight: "10px",
    flexGrow: 1,
  },
  servicesRoot: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "20px",
    width: "100%",
  },
  servicesButtonRoot: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    width: "100%",
  },
  servicesButton: {
    border: "1px solid lightgray",
    flexGrow: 1,
    height: "35px",
    marginRight: "10px",
    textTransform: "capitalize",
  },
  scheduleRoot: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "20px",
    width: "100%",
  },
  scheduleButtonRoot: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    width: "100%",
  },
  scheduleButton: {
    border: "1px solid lightgray",
    flexGrow: 1,
    height: "35px",
    marginRight: "10px",
  },
  spinner: { marginRight: "10px" },
}));

function Carousel() {
  const classes = useStyle();
  const disp = useDispatch();
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(Date.now());
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [number, setNumber] = useState(3);
  const [services, setServices] = useState("lunch");
  const [time, setTime] = useState("19:15");
  let { token } = useUserContext();
  const { loading } = useSelector((state) => state.loadingReducer);
  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  const tableReserv = () => {
    try {
      if (!dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(date))) {
        toast.error("Please provide correct date");
      } else {
        const payload = {
          numberOfPeople: number,
          services: services,
          startTime: date + " " + time,
        };
        disp(reserveTable(payload));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <strong className={classes.tablReserv}>Table Reservation</strong>
      <div className={classes.numberRoot}>
        <div className={classes.numberOfPeople}>Number of people</div>
        <div className={classes.numberButtonRoot}>
          {[...Array(5).keys()].map((index) => (
            <button
              className={`${classes.numberButton} ${
                number === index + 1 ? classes.activeColor : null
              }`}
              onClick={() => setNumber(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <TextField
            className={`enterValueTxtField`}
            placeholder="Enter Value"
            id="filled-size-small"
            variant="outlined"
            size="small"
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
      </div>

      <div className={classes.dateRoot}>
        <div className={classes.date}>
          <div className={classes.numberOfPeople}>Date</div>
          <div className={classes.dateText}>
            <span className={classes.otherDate}>Other Date</span>
            <div className={classes.calendarSpacing}>
              {showCalendar ? (
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setDate(dayjs(date).format("YYYY-MM-DD"));
                    setStartDate(date);
                  }}
                />
              ) : (
                <CalendarTodayIcon
                  className={classes.calendarIcon}
                  onClick={() => setShowCalendar(true)}
                />
              )}
            </div>
          </div>
        </div>
        <div className={classes.dateButtonRoot}>
          <button
            className={`${classes.dateButton} ${
              date === dayjs().format("YYYY-MM-DD") ? classes.activeColor : null
            }`}
            onClick={() => setDate(dayjs().format("YYYY-MM-DD"))}
          >
            Today
          </button>
          <button
            className={`${classes.dateButton} ${
              date === dayjs().add(1, "day").format("YYYY-MM-DD")
                ? classes.activeColor
                : null
            }`}
            onClick={() => setDate(dayjs().add(1, "day").format("YYYY-MM-DD"))}
          >
            Tomorrow
          </button>
          <button
            className={`${classes.dateButton} ${
              date === dayjs().add(2, "day").format("YYYY-MM-DD")
                ? classes.activeColor
                : null
            }`}
            onClick={() => setDate(dayjs().add(2, "day").format("YYYY-MM-DD"))}
          >
            {dayjs().add(2, "day").format("MMMM D, YYYY")}
          </button>
        </div>
      </div>

      <div className={classes.servicesRoot}>
        <div className={classes.numberOfPeople}>Services</div>
        <div className={classes.servicesButtonRoot}>
          {["breakfast", "lunch", "dinner"].map((service) => (
            <button
              onClick={() => setServices(service)}
              className={`${classes.servicesButton} ${
                services === service ? classes.activeColor : null
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className={classes.scheduleRoot}>
        <div className={classes.numberOfPeople}>Schedule</div>
        <div className={classes.scheduleButtonRoot}>
          {["7:00", "19:15", "19:30", "19:45"].map((shedule) => (
            <button
              onClick={() => setTime(shedule)}
              className={`${classes.scheduleButton} ${
                time === shedule ? classes.activeColor : null
              }`}
            >
              {shedule}
            </button>
          ))}
          <FormControl className={classes.formControl}>
            <Select defaultValue="0" id="grouped-select">
              {["8:00", "8:15", "8:30", "8:45", "9:00", "9:15"].map(
                (tme, index) => (
                  <MenuItem value={index} onClick={() => setTime(tme)}>
                    {tme}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex justify-center m-2">
        {token && (
          <button
            className="inline-flex text-white bg-gray-900 font-weight-light hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-sm"
            onClick={tableReserv}
          >
            {loading && (
              <Spinner
                animation="border"
                size="sm"
                className={classes.spinner}
              />
            )}
            Submit
          </button>
        )}
      </div>
    </div>
    // <div className="text-gray-900   w-75 mb-2 	bg-gray-100 px-0 py-0">
    //     <div className="container ml-0 flex   py-0 px-0 md:flex-row flex-col ">
    //         <div className="lg:max-w-lg px-0 w-75 lg:w-full ml-0 md:w-1/2 w-5/6 md:mb-0">
    //             <img className="object-cover px-0 object-center ml-0 max-h-80 w-full " alt="hero" src="https://dummyimage.com/720x600"/>
    //         </div>
    //         <div className="lg:flex-grow leading-relaxed divide-y divide-gray-300  md:w-1/2  ml-0 lg:min-h-80 max-h-80	px-4 py-4 flex flex-col md:items-start md:text-left  ">
    //             <div className=' d-flex justify-content-around w-full px-0 ml-0  '>
    //                 <h2 className=" sm:text-3xl  text-3xl mb-2 flex-grow -1   ">Arcane</h2>
    //                 <h2 className="sm:text-3xl  text-3xl mb-2  ">8.3<span className='text-xs '>/10</span></h2>
    //             </div>
    //             <div className=' d-flex justify-content-around w-full  py-1'>

    //                     <p className='w-50 text-xs flex-grow-1 leading-relaxed'>Viale san Michele del carso 7 Milan 20144</p>

    //                     <span className=' text-xs text-gold	  '>See on map</span>

    //             </div>
    //             <div className='w-full'>
    //                 <p className=" leading-relaxed text-xs w-full py-1">Average price 38 accepts returns</p>
    //                 <p className=" leading-relaxed text-s w-full text-gold py-1 px-1 border-l-4 border-yellow-400   font-weight-bold">-50% at checkout</p>

    //                 <div className="flex justify-center">
    //                     <button
    //                         className="inline-flex text-white bg-gray-900 font-weight-light hover:text-gray-900 border-0 py-2 px-6 focus:outline-none  rounded-pill text-sm">Book nup to 50%
    //                     </button>

    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // </div>
  );
}

export default Carousel;
