// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.FooBar.Inputs
{

    public sealed class TopLevelArgs : global::Pulumi.ResourceArgs
    {
        [Input("buzz")]
        public Input<string>? Buzz { get; set; }

        public TopLevelArgs()
        {
        }
        public static new TopLevelArgs Empty => new TopLevelArgs();
    }
}