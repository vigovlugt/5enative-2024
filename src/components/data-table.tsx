import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TableHeadText,
} from "./ui/table";
import { Text } from "react-native";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    RowData,
    Row,
    getFilteredRowModel,
} from "@tanstack/react-table";

import "@tanstack/react-table";
import { Href } from "expo-router";

declare module "@tanstack/react-table" {
    interface ColumnMeta<TData extends RowData, TValue> {
        maxWidth?: number;
        flex?: number;
        textAlign?: "left" | "center" | "right";
    }
}

type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    href?: (row: Row<TData>) => Href<string | object>;
    itemHeight: number;
};

export function DataTable<TData, TValue>({
    columns,
    data,
    href,
    itemHeight
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead
                                    key={header.id}
                                    style={{
                                        maxWidth:
                                            header.column.columnDef.meta
                                                ?.maxWidth,
                                        flex: header.column.columnDef.meta
                                            ?.flex,
                                    }}
                                >
                                    <TableHeadText
                                        style={{
                                            textAlign:
                                                header.column.columnDef.meta
                                                    ?.textAlign,
                                        }}
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext(),
                                              )}
                                    </TableHeadText>
                                </TableHead>
                            );
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            {table.getRowModel().rows?.length ? (
                <TableBody
                    data={table.getRowModel().rows}
                    getItemLayout={(data, index) => (
                        {length: itemHeight, offset: itemHeight * index, index}
                    )}
                    renderItem={({ item: row }) =>
                        href ? (
                            // Link row
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                href={href(row)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={{
                                            maxWidth:
                                                cell.column.columnDef.meta
                                                    ?.maxWidth,
                                            flex: cell.column.columnDef.meta
                                                ?.flex,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textAlign:
                                                    cell.column.columnDef.meta
                                                        ?.textAlign,
                                            }}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Text>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ) : (
                            // View row
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={{
                                            maxWidth:
                                                cell.column.columnDef.meta
                                                    ?.maxWidth,
                                            flex: cell.column.columnDef.meta
                                                ?.flex,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textAlign:
                                                    cell.column.columnDef.meta
                                                        ?.textAlign,
                                            }}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Text>
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    }
                ></TableBody>
            ) : (
                <TableBody
                    data={[null]}
                    renderItem={() => (
                        <TableRow>
                            <TableCell
                                style={{
                                    height: 96,
                                }}
                            >
                                <Text style={{ textAlign: "center" }}>
                                    No results.
                                </Text>
                            </TableCell>
                        </TableRow>
                    )}
                />
            )}
        </Table>
    );
}
