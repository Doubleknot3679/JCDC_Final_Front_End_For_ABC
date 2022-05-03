import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";
import MOCK_CLIENT_INFO_HOME_DEPOT from "./MOCK_CLIENT_INFO_HOME_DEPOT.json";
import { INFOCOLUMNS } from "./clientInfoColumns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { Checkbox } from "./Checkbox";

export const ClientInfoTable = () => {
  // use table function requires us to pass the data using the useMemo function, also ensures the data isn't recreated for every render
  const columns = useMemo(() => INFOCOLUMNS, []);
  const data = useMemo(() => MOCK_CLIENT_INFO_HOME_DEPOT, []);

  // Turns our columns and data into a table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
          },
          ...columns
        ];
      });
    }
  );

  const { globalFilter } = state;

  // formatting our table components
  return (
    <>
      <pre></pre>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
