"use client"

import * as React from "react"
import {
    IconDotsVertical,
    IconEye,
    IconEdit,
    IconTrash,
} from "@tabler/icons-react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Transaction = {
    id: string
    invoiceId: string
    patientName: string
    item: string
    description: string
    accountType: "Medicare" | "Account Hold" | "Private"
    gst: number
    totalFee: number
    totalPaid: number
}

const data: Transaction[] = [
    {
        id: "1",
        invoiceId: "148072",
        patientName: "James Smith",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00
    },
    {
        id: "2",
        invoiceId: "148073",
        patientName: "Sarah Johnson",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00
    },
    {
        id: "3",
        invoiceId: "148979",
        patientName: "Emma Wilson",
        item: "36",
        description: "Surgery consultation, Level C, submitted 21/08",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 84.90,
        totalPaid: 0.00
    },
    {
        id: "4",
        invoiceId: "148983",
        patientName: "Maria Garcia",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00
    },
    {
        id: "5",
        invoiceId: "148983",
        patientName: "Maria Garcia",
        item: "75870",
        description: "Direct-billing incentive",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 21.85,
        totalPaid: 0.00
    },
    {
        id: "6",
        invoiceId: "148982",
        patientName: "David Brown",
        item: "",
        description: "HCPD, Level B Workcover, sent im",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 168.00,
        totalPaid: 0.00
    },
    {
        id: "7",
        invoiceId: "148983",
        patientName: "Michael Davis",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00
    },
    {
        id: "8",
        invoiceId: "148985",
        patientName: "Robert Miller",
        item: "",
        description: "AA303, Level C Workcover",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 168.00,
        totalPaid: 0.00
    }
]

const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "invoiceId",
        header: "Invoice ID",
        cell: ({ row }) => (
            <div className="font-mono text-blue-600">{row.getValue("invoiceId")}</div>
        ),
    },
    {
        accessorKey: "patientName",
        header: "Patient Name",
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue("patientName")}</div>
        ),
    },
    {
        accessorKey: "item",
        header: "Item",
        cell: ({ row }) => {
            const item = row.getValue("item") as string
            return (
                <div className="font-mono text-sm">
                    {item || "-"}
                </div>
            )
        },
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => (
            <div className="max-w-xs truncate text-sm">
                {row.getValue("description")}
            </div>
        ),
    },
    {
        accessorKey: "accountType",
        header: "Account Type",
        cell: ({ row }) => {
            const accountType = row.getValue("accountType") as string
            return (
                <Badge
                    variant="outline"
                    className={
                        accountType === "Medicare"
                            ? "text-blue-600 border-blue-200 bg-blue-50"
                            : accountType === "Account Hold"
                                ? "text-orange-600 border-orange-200 bg-orange-50"
                                : "text-purple-600 border-purple-200 bg-purple-50"
                    }
                >
                    {accountType}
                </Badge>
            )
        },
    },
    {
        accessorKey: "gst",
        header: "GST",
        cell: ({ row }) => {
            const gst = parseFloat(row.getValue("gst"))
            return <div className="text-sm">${gst.toFixed(2)}</div>
        },
    },
    {
        accessorKey: "totalFee",
        header: "Total Fee",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalFee"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "AUD",
            }).format(amount)
            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "totalPaid",
        header: "Total Paid",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalPaid"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "AUD",
            }).format(amount)
            return <div className="text-sm">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const transaction = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <IconDotsVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <IconEye className="mr-2 h-4 w-4" />
                            View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <IconEdit className="mr-2 h-4 w-4" />
                            Edit Invoice
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <IconTrash className="mr-2 h-4 w-4" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export function RecentTransactionsTable() {
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        state: {
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="rounded-lg border bg-card">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">Recent Transactions</h3>
                            <p className="text-sm text-muted-foreground">
                                Latest billing activity from your practice
                            </p>
                        </div>
                        <Button variant="outline" size="sm">
                            View All
                        </Button>
                    </div>
                </div>
                <div className="border-t">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No transactions found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
