// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * A test invoke that echoes its input.
 */
export function doEcho(args?: DoEchoArgs, opts?: pulumi.InvokeOptions): Promise<DoEchoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("testprovider:index:doEcho", {
        "echo": args.echo,
    }, opts);
}

export interface DoEchoArgs {
    echo?: string;
}

export interface DoEchoResult {
    readonly echo?: string;
}
/**
 * A test invoke that echoes its input.
 */
export function doEchoOutput(args?: DoEchoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<DoEchoResult> {
    return pulumi.output(args).apply((a: any) => doEcho(a, opts))
}

export interface DoEchoOutputArgs {
    echo?: pulumi.Input<string>;
}