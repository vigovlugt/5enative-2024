import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    TableHeadText,
} from "./ui/table";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    RowData,
    Row,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { Text } from "./text";

import "@tanstack/react-table";
import { Href, useRouter } from "expo-router";

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
    onPress?: (row: Row<TData>) => void;
    itemHeight: number;
};

export function DataTable<TData, TValue>({
    columns,
    data,
    href,
    onPress,
    itemHeight,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });
    const router = useRouter();

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
                                        flex:
                                            header.column.columnDef.meta
                                                ?.flex ?? 1,
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
                    getItemLayout={(data, index) => ({
                        length: itemHeight,
                        offset: itemHeight * index,
                        index,
                    })}
                    renderItem={({ item: row }) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            onPress={() => {
                                if (onPress) {
                                    onPress(row);
                                }
                                if (href) {
                                    router.navigate(href(row));
                                }
                            }}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    style={{
                                        maxWidth:
                                            cell.column.columnDef.meta
                                                ?.maxWidth,
                                        flex:
                                            cell.column.columnDef.meta?.flex ??
                                            1,
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
                    )}
                ></TableBody>
            ) : (
                <TableBody
                    data={[null]}
                    renderItem={() => (
                        <TableRow>
                            <TableCell
                                style={{
                                    height: 96,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text>No results.</Text>
                            </TableCell>
                        </TableRow>
                    )}
                />
            )}
        </Table>
    );
}
