import { INFO } from "src/common/consts";
import BoxBase from "src/components/Boxs/BoxBase";
import Iconify from "src/components/Iconify/Iconify";
import LinkBase from "src/components/Links/LinkBase";
import TypographyBase from "src/components/Typographys/TypographyBase";

const mapInfoToIcon: Record<string, string> = {
    email: "line-md:email",
    phone: "line-md:phone",
    address: "entypo:address",
    linkedin: "akar-icons:linkedin-fill",
    github: "akar-icons:github-fill",
};

const Information = () => {
    return (
        <BoxBase
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            {INFO.information.map((info, index) => (
                <BoxBase
                    key={index}
                    sx={{
                        display: "grid",
                        gridTemplateAreas: `
                            "icon label"
                            "icon value"
                        `,
                        width: "fit-content",
                        textAlign: "start",
                        columnGap: "15px",
                    }}
                >
                    <BoxBase
                        sx={{
                            bgcolor: "primary.light",
                            padding: "10px",
                            display: "flex",
                            width: "fit-content",
                            height: "fit-content",
                            borderRadius: "50px",
                        }}
                        gridArea="icon"
                    >
                        <Iconify
                            icon={mapInfoToIcon[info.label.toLowerCase()]}
                            sx={{
                                width: "22px",
                                height: "22px",
                                color: "primary.main",
                            }}
                        />
                    </BoxBase>
                    <TypographyBase gridArea="label" variant="variant2">
                        {info.label}
                    </TypographyBase>
                    <LinkBase to={info.value} disabled={!info.isLink} target="_blank">
                        <TypographyBase gridArea="value" variant="body2">
                            {info.value}
                        </TypographyBase>
                    </LinkBase>
                </BoxBase>
            ))}
        </BoxBase>
    );
};

export default Information;
