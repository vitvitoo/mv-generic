import React from "react";

export type ColumnDefs = {
    title: string;
} & (
        | {
            field: string;
        }
        | {
            render: (rowData: Record<string, any>) => React.ReactNode;
        }
    );

const Table = ({
    columnDefs,
    data,
}: {
    columnDefs: ColumnDefs[];
    data: Record<string, any>[];
}) => {
    return (
        <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
            <thead className="bg-green-200">
                <tr>
                    {columnDefs.map((column, index) => (
                        <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((rowData, index) => (
                    <tr key={index} className="cursor-pointer hover:bg-gray-100">
                        {columnDefs.map((column, index) => (
                            <td key={index} className="px-6 py-4 whitespace-nowrap">
                                {"field" in column ? rowData[column.field!] : column.render ? column.render(rowData) : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
