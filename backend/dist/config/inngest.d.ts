import { Inngest } from "inngest";
export declare const inngest: Inngest<{
    id: string;
}>;
export declare const functions: import("inngest").InngestFunction<Omit<import("inngest").InngestFunction.Options<Inngest<{
    id: string;
}>, import("inngest").InngestMiddleware.Stack, [{
    event: string;
}], import("inngest").Handler<Inngest<{
    id: string;
}>, string, {
    error: Error;
    event: import("inngest").FailureEventPayload<import("inngest").EventPayload<any>>;
    logger: import("inngest").Logger;
}>>, "triggers">, ({ event }: import("inngest").Context<Inngest<{
    id: string;
}>, string, {
    logger: import("inngest").Logger;
}>) => Promise<void>, import("inngest").Handler<Inngest<{
    id: string;
}>, string, {
    error: Error;
    event: import("inngest").FailureEventPayload<import("inngest").EventPayload<any>>;
    logger: import("inngest").Logger;
}>, Inngest<{
    id: string;
}>, import("inngest").InngestMiddleware.Stack, [{
    event: string;
}]>[];
//# sourceMappingURL=inngest.d.ts.map