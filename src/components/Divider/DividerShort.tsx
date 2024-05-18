import BoxBase from "src/components/Boxs/BoxBase";

const DividerShort = () => {
    return (
        <BoxBase
            sx={{
                height: "1px",
                width: "120px",
                backgroundColor: "#C0C0C0",
                mx: "auto",
                my: 2,
                mb: 5,
                ":after": {
                    content: "''",
                    display: "block",
                    width: "40px",
                    height: "3px",
                    backgroundColor: "primary.main",
                    transform: "translateY(-30%)",
                    mx: "auto",
                },
            }}
        ></BoxBase>
    );
};

export default DividerShort;
