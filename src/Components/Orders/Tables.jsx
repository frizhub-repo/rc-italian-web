import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num?.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items?.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Tables({ products, total }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <>
              <TableRow key={product?.product?._id || product.product}>
                <TableCell>{product?.product?.title || product.name}</TableCell>
                <TableCell align="right">
                  {(product?.isDiscount === "flat" ||
                    product?.isDiscount === "percentage") && (
                    <span className={classes.originalPriceTag}>
                      {product?.originalPrice}
                    </span>
                  )}
                  {product.price}
                </TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">
                  {ccyFormat(product?.price * product?.quantity)}
                </TableCell>
              </TableRow>
              {product?.bundledProduct?.length > 0 &&
                product?.bundledProduct?.map((prodObj) => (
                  <TableRow>
                    <TableCell>{prodObj?.product?.title}</TableCell>
                    <TableCell className={classes.free} align="right">
                      Free
                    </TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">0</TableCell>
                  </TableRow>
                ))}
            </>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} style={{ fontWeight: "500" }}>
              Total
            </TableCell>
            <TableCell align="right">{ccyFormat(total)} €</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
