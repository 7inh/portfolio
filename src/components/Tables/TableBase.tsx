import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import useTranslation from "src/hooks/utils/useTranslation";

export interface TableBaseProps {
    data: {
        [key: string]: any;
    }[];
    columns: GridColDef[];
}

const TableBase = (props: TableBaseProps) => {
    const { data, columns } = props;
    const t = useTranslation();

    const columnsDefaultOptions: GridColDef[] = useMemo(
        () => columns.map((column) => ({ disableColumnMenu: true, sortable: false, ...column })),
        [columns]
    );

    const renderTable = useMemo(
        () => (
            <DataGrid
                rows={data}
                columns={columnsDefaultOptions}
                columnVisibilityModel={{
                    groupId: false,
                }}
                // filterModel={{
                //     items: [
                //         {
                //             field: "email",
                //             operator: "contains",
                //             value: filter.search,
                //         },
                //     ],
                // }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                getRowId={(row) => row.Mail}
                // pageSizeOptions={[5, 10]}
                // checkboxSelection
                // onRowSelectionModelChange={(newSelection: any) =>
                //     setSelectedMemberList(newSelection)
                // }
                // rowSelectionModel={selectedMemberList}
                sx={{
                    borderRadius: 2,
                    ".MuiPaper-root": {
                        boxShadow: "none",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        marginTop: "-1px",
                    },
                    // "& .MuiDataGrid-columnHeaders": {
                    //     backgroundColor:
                    //         selectedMemberList.length > 0 ? "rgb(255 233 228)" : "inherit",
                    // },
                    "& .MuiDataGrid-selectedRowCount": {
                        opacity: 0,
                    },
                    "& .MuiDataGrid-overlayWrapper": {
                        minHeight: "100px", //"calc(100vh - 380px)",
                    },
                    maxHeight: "calc(100vh - 250px)",
                }}
                disableRowSelectionOnClick
                disableColumnMenu
                // hideFooterSelectedRowCount
                // hideFooterPagination
                localeText={{
                    MuiTablePagination: {
                        labelDisplayedRows: ({ from, to, count }) =>
                            t("common.rowFromToOf", {
                                from: from,
                                to: to,
                                count: count,
                            }),
                        labelRowsPerPage: t("common.rowsPerPage"),
                    },
                    noRowsLabel: t("common.noRowsData"),
                }}
            />
        ),
        [columnsDefaultOptions, data, t]
    );

    return <>{renderTable}</>;
};

export default TableBase;
