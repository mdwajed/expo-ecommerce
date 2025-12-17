import { Inngest } from "inngest";
export declare const inngest: Inngest<{
    id: string;
    signingKey: string | undefined;
}>;
export declare const functions: import("inngest").InngestFunction<Omit<import("inngest").InngestFunction.Options<Inngest<{
    id: string;
    signingKey: string | undefined;
}>, import("inngest").InngestMiddleware.Stack, [{
    event: string;
}], import("inngest").Handler<Inngest<{
    id: string;
    signingKey: string | undefined;
}>, string, {
    error: Error;
    event: import("inngest").FailureEventPayload<import("inngest").EventPayload<any>>;
    logger: import("inngest").Logger;
}>>, "triggers">, ({ event }: import("inngest").Context<Inngest<{
    id: string;
    signingKey: string | undefined;
}>, string, {
    logger: import("inngest").Logger;
}>) => Promise<void>, import("inngest").Handler<Inngest<{
    id: string;
    signingKey: string | undefined;
}>, string, {
    error: Error;
    event: import("inngest").FailureEventPayload<import("inngest").EventPayload<any>>;
    logger: import("inngest").Logger;
}>, Inngest<{
    id: string;
    signingKey: string | undefined;
}>, import("inngest").InngestMiddleware.Stack, [{
    event: string;
}]>[];
//# sourceMappingURL=inngest.d.ts.map