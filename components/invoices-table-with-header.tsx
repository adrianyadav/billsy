"use client"

import * as React from "react"
import {
    IconDotsVertical,
    IconEye,
    IconEdit,
    IconTrash,
    IconFilter,
    IconDownload,
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

type Invoice = {
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

const data: Invoice[] = [
    {
        id: "1",
        invoiceId: "148072",
        patientName: "James Smith",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00,
    },
    {
        id: "2",
        invoiceId: "148072",
        patientName: "James Smith",
        item: "75870",
        description: "Direct-billing incentive",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 84.90,
        totalPaid: 0.00,
    },
    {
        id: "3",
        invoiceId: "148073",
        patientName: "Sarah Johnson",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00,
    },
    {
        id: "4",
        invoiceId: "148074",
        patientName: "Maria Garcia",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00,
    },
    {
        id: "5",
        invoiceId: "148074",
        patientName: "Maria Garcia",
        item: "75870",
        description: "Direct-billing incentive",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 84.90,
        totalPaid: 0.00,
    },
    {
        id: "6",
        invoiceId: "148075",
        patientName: "Michael Davis",
        item: "23",
        description: "Surgery consultation, Level B",
        accountType: "Medicare",
        gst: 0.00,
        totalFee: 43.90,
        totalPaid: 0.00,
    },
    {
        id: "7",
        invoiceId: "148075",
        patientName: "Michael Davis",
        item: "75870",
        description: "Direct-billing incentive",
        accountType: "Account Hold",
        gst: 0.00,
        totalFee: 84.90,
        totalPaid: 0.00,
    },
]

const columns: ColumnDef<Invoice>[] = [
    {
        accessorKey: "invoiceId",
        header: "Invoice ID",
        cell: ({ row }) => (
            <div className="text-blue-600 font-medium">
                {row.getValue("invoiceId")}
            </div>
        ),
    },
    {
        accessorKey: "patientName",
        header: "Patient Name",
    },
    {
        accessorKey: "item",
        header: "Item",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "accountType",
        header: "Account Type",
        cell: ({ row }) => {
            const accountType = row.getValue("accountType") as string
            return (
                <Badge
                    variant={accountType === "Medicare" ? "default" : "secondary"}
                    className={accountType === "Medicare" ? "bg-blue-100 text-blue-800" : "bg-orange-100 text-orange-800"}
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
            const amount = parseFloat(row.getValue("gst"))
            return <div className="text-right">${amount.toFixed(2)}</div>
        },
    },
    {
        accessorKey: "totalFee",
        header: "Total Fee",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalFee"))
            return <div className="text-right font-medium">${amount.toFixed(2)}</div>
        },
    },
    {
        accessorKey: "totalPaid",
        header: "Total Paid to Date",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("totalPaid"))
            return <div className="text-right">${amount.toFixed(2)}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
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
                            View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <IconEdit className="mr-2 h-4 w-4" />
                            Edit
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

export function InvoicesTableWithHeader() {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="bg-white border border-gray-200 rounded-lg">
            {/* Summary Metrics Header */}
            <div className="bg-gray-100">
                <div className="p-6">
                    <div className="grid grid-cols-3 gap-8">
                        {/* Total Patients */}
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Total Patients</div>
                            <div className="text-2xl font-bold text-gray-800">11</div>
                        </div>

                        {/* Total Fees */}
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Total Fees</div>
                            <div className="text-2xl font-bold text-gray-800">$675.50</div>
                        </div>

                        {/* Total Paid */}
                        <div>
                            <div className="text-sm text-gray-600 mb-1">Total Paid</div>
                            <div className="text-2xl font-bold text-gray-800">$0.00</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons Row */}
            <div className="bg-white px-6 py-4 border-b border-gray-200">
                <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <IconFilter className="h-4 w-4" />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <IconDownload className="h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
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
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
