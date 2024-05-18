import { Input } from "@mui/material";
import { ACCEPTED_DOCUMENT_EXT } from "src/common/consts";

export interface InputFilesProps {
    id: string;
    multiple?: boolean;
    accept?: string;
    fileType?: "image" | "document";
    acceptAll?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFiles = (props: InputFilesProps) => {
    const {
        id,
        multiple,
        accept: _accept,
        fileType = "document",
        acceptAll = false,
        onChange,
    } = props;
    const accept = _accept || (fileType === "image" ? "" : ACCEPTED_DOCUMENT_EXT);

    return (
        <Input
            type="file"
            id={`${id}-file`}
            componentsProps={{
                input: {
                    multiple: multiple ?? true,
                    ...(accept && !acceptAll
                        ? {
                              accept,
                          }
                        : {}),
                },
            }}
            sx={{ display: "none" }}
            inputProps={{
                ...(fileType === "image" && !acceptAll
                    ? {
                          accept: "image/*",
                      }
                    : {}),
            }}
            onChange={onChange}
        />
    );
};

export default InputFiles;
