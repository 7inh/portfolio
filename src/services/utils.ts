import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { clearAllStorage } from "src/common/utils";

export type ServiceRequiredDefinition<T = any> = Required<T>;

export type ServiceMap<T = any> = {
    [X in keyof T]: ServiceRequiredDefinition;
};

export function createMutationService<S extends ServiceMap>(service: S) {
    return function mutation<
        Entity extends keyof S,
        Action extends keyof S[Entity],
        Handler extends S[Entity][Action]
    >({
        entity,
        action,
        option,
    }: {
        entity: Entity;
        action: Action;
        option?: {
            onSuccess?: (data: any, variables: any, context: any) => void;
            onError?: (
                error: AxiosError<unknown, any>,
                variables: Parameters<Handler>[0],
                context: unknown
            ) => void;
        };
    }) {
        return useMutation({
            mutationFn: async (variable: Parameters<Handler>[0]) => {
                try {
                    return await service[entity][action](variable);
                } catch (error) {
                    return error;
                }
            },
            onSuccess: (data, variables, context) => {
                option?.onSuccess?.(data, variables, context);
            },
        });
    };
}

export function createQueryService<S extends ServiceMap>(service: S) {
    return function query<
        Entity extends keyof S,
        Action extends keyof S[Entity],
        Handler extends S[Entity][Action]
    >({
        entity,
        action,
        params,
        option,
    }: {
        entity: Entity;
        action: Action;
        params: Parameters<Handler>[0];
        option?: {
            enable: boolean;
            onError?: (error: AxiosError<unknown, any>) => void;
            onSuccess?: (data: any) => void;
            select?: (data: any) => any;
        };
    }) {
        const queryKey = `${String(entity)}_${String(action)}`;

        return useQuery([queryKey, params], () => service[entity][action](params), {
            retry: navigator.onLine ? 1 : false,
            retryDelay: 2000,
            refetchOnWindowFocus: false,
            enabled: option?.enable ?? true,
            onError: async (error: AxiosError) => {
                if (error.response?.status === 401) {
                    try {
                        // TODO: Refresh token
                    } catch (error) {
                        setTimeout(() => {
                            clearAllStorage();
                            window.location.href = "/auth/login";
                        }, 2000);
                    }
                } else if (error.code === "ERR_NETWORK") {
                    window.dispatchEvent(new Event("ERR_NETWORK"));
                } else {
                    option?.onError?.(error);
                }
            },
            onSuccess: (data) => {
                option?.onSuccess?.(data);
            },
            select: (response) => {
                const data = response.data;
                if (option?.select) {
                    return option.select(data);
                }
                return data;
            },
        });
    };
}
