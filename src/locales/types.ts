export type LangType = {
    currentLanguage: string;
    auth: {};
    error: {};
    message: {
        backToHome: string;
        noOptions: string;
        selectKeyPointOnImage: string;
    };
    success: {
        sendMessage: string;
    };
    errorHandler: {};
    common: {
        submit: string;
        logout: string;
        search: string;
        done: string;
        save: string;
        exportDoc: string;
        imageClassification: string;
        objectDetection: string;
        imageRectification: string;
        textDetection: string;
        textRecognition: string;
        keyInformationExtraction: string;
        relationExtraction: string;
        rowsPerPage: string;
        rowFromToOf: string;
        noRowsData: string;
        role: string;
        status: string;
        approve: string;
        reject: string;
        remove: string;
        cancel: string;
        invite: string;
        add: string;
        config: string;
        params: string;
        uploadPhoto: string;
        dragOrBrowse: string;
        imageTypeHint: string;
        parameters: string;
        modelVersion: string;
        response: string;
        newCategory: string;
        newObject: string;
        fontSize: string;
        group: string;
        unGroup: string;
    };
    form: {
        common: {
            validation: {
                required: string;
                invalidEmail: string;
            };
        };
        contact: {
            name: string;
            email: string;
            subject: string;
            message: string;
        };
    };
    page: {
        home: {
            title: string;
        };
        about: {
            title: string;
        };
        employmentHistory: {
            title: string;
        };
        projects: {
            title: string;
        };
        contact: {
            title: string;
        };
    };
    dialog: {
        removeMember: {
            title: string;
            content: string;
        };
    };
};

export type LocaleType = "en" | "vi";
export const ListLocale: LocaleType[] = ["en", "vi"];
