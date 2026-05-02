// src/pages/Management/Order/index.jsx
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { ListAlt } from "@mui/icons-material";

// ─── Sample data ──────────────────────────────────────────────────────────
const ROWS = [
  {
    ref: "1111",
    customer: "John Doe",
    orderDate: "2024-03-20",
    status: "Pending",
    expectedDelivery: "3/20/20",
    totalAmount: 300,
    numItems: 232,
  },
];

export default function OrderPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const filtered = ROWS.filter((r) =>
    Object.values(r).some((v) =>
      String(v).toLowerCase().includes(search.toLowerCase()),
    ),
  );

  return (
    <Box>
      {/* ── Page title + breadcrumb ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Order Management
        </Typography>
        <Breadcrumbs>
          <Link underline="hover" color="primary" href="#">
            Management
          </Link>
          <Typography color="text.primary">Order</Typography>
        </Breadcrumbs>
      </Box>

      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,.08)",
        }}
      >
        {/* ── Card header ── */}
        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Order Management Data table
          </Typography>
          <Button variant="contained" startIcon={<ListAlt />} size="small">
            Order Details
          </Button>
        </Box>

        {/* ── Search ── */}
        <Box sx={{ px: 3, pt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Search:
            </Typography>
            <TextField
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: 200 }}
            />
          </Box>
        </Box>

        {/* ── Table ── */}
        <TableContainer sx={{ px: 2, pt: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: 700,
                    color: "text.primary",
                    borderBottom: "2px solid #e2e8f0",
                  },
                }}
              >
                <TableCell>Reference No.</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Order Status</TableCell>
                <TableCell>Expected Delivery</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Number of Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow key={i} hover>
                    <TableCell>{row.ref}</TableCell>
                    <TableCell>{row.customer}</TableCell>
                    <TableCell>{row.orderDate}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.expectedDelivery}</TableCell>
                    <TableCell>{row.totalAmount}</TableCell>
                    <TableCell>
                      <Link href="#" underline="hover" color="primary">
                        {row.numItems}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* ── Pagination ── */}
        <Box
          sx={{
            px: 3,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Showing {Math.min(page * rowsPerPage + 1, filtered.length)} to{" "}
            {Math.min((page + 1) * rowsPerPage, filtered.length)} of{" "}
            {filtered.length} entries
          </Typography>
          <TablePagination
            component="div"
            count={filtered.length}
            page={page}
            onPageChange={(_, p) => setPage(p)}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
            labelDisplayedRows={() => ""}
            sx={{
              "& .MuiTablePagination-toolbar": { minHeight: "auto", p: 0 },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
