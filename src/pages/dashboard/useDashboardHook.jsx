import axios from "axios";
import React, { useEffect, useState } from "react";

export const useDashboardHook = () => {
  function createData(icao, origin, contact, longitude, latitude, category) {
    return { icao, origin, contact, longitude, latitude, category };
  }
  const columns = [
    { id: "icao", label: "ICAO24", minWidth: 170 },
    { id: "origin", label: "Origin country", minWidth: 100 },
    { id: "contact", label: "Last Contact", minWidth: 170 },
    { id: "longitude", label: "longitude", minWidth: 170 },
    { id: "latitude", label: "latitude", minWidth: 170 },
    { id: "Category", label: "Category", minWidth: 170 },
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getData = async () => {
    axios
      .get("https://opensky-network.org/api/states/all", {
        headers: {
          Authorization: "Basic " + window.btoa("tekenna:kada1234"),
        },
      })
      .then((data) => {
        const arr = [];
        data.data.states.forEach((state) => {
          arr.push(
            createData(
              state[0],
              state[2],
              state[4],
              state[5],
              state[6],
              state[17]
            )
          );
        });
        setRows(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return { columns, rows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage };
};
