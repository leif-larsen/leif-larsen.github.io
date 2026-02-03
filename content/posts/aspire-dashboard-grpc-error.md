---
title: "Aspire Dashboard gRPC Error Caused by a Local Proxy"
date: "2026-02-03"
---

I have been working with [Aspire]() in a couple of projects lately. Suddenly I started getting this exception every time I tried to get into the dashboard:

```
fail: Aspire.Hosting.Dashboard.ServiceClient.DashboardClient[0]
      Error #4 watching interactions.
      Grpc.Core.RpcException: Status(StatusCode="Internal", Detail="Error starting gRPC call. HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.", DebugException="System.Net.Http.HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.")
       ---> System.Net.Http.HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.
         at System.Net.Http.HttpConnectionPool.ThrowGetVersionException(HttpRequestMessage request, Int32 desiredVersion, Exception inner)
         at System.Net.Http.HttpConnectionPool.SendWithVersionDetectionAndRetryAsync(HttpRequestMessage request, Boolean async, Boolean doRequestAuth, CancellationToken cancellationToken)
         at System.Net.Http.DiagnosticsHandler.SendAsyncCore(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
         at System.Net.Http.RedirectHandler.SendAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
         at Grpc.Net.Client.Balancer.Internal.BalancerHttpHandler.SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
         at Grpc.Net.Client.Internal.GrpcCall`2.RunCall(HttpRequestMessage request, Nullable`1 timeout)
         --- End of inner exception stack trace ---
         at Grpc.Net.Client.Internal.GrpcCall`2.GetResponseHeadersCoreAsync()
         at Grpc.Net.Client.Internal.Retry.RetryCallBase`2.GetResponseHeadersCoreAsync()
Aspire.Hosting.Dashboard.ServiceClient.DashboardClient: Error: Error #4 watching interactions.
Grpc.Core.RpcException: Status(StatusCode="Internal", Detail="Error starting gRPC call. HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.", DebugException="System.Net.Http.HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.")
 ---> System.Net.Http.HttpRequestException: Requesting HTTP version 2.0 with version policy RequestVersionExact while unable to establish HTTP/2 connection.
   at System.Net.Http.HttpConnectionPool.ThrowGetVersionException(HttpRequestMessage request, Int32 desiredVersion, Exception inner)
   at System.Net.Http.HttpConnectionPool.SendWithVersionDetectionAndRetryAsync(HttpRequestMessage request, Boolean async, Boolean doRequestAuth, CancellationToken cancellationToken)
   at System.Net.Http.DiagnosticsHandler.SendAsyncCore(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
   at System.Net.Http.RedirectHandler.SendAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
   at Grpc.Net.Client.Balancer.Internal.BalancerHttpHandler.SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
   at Grpc.Net.Client.Internal.GrpcCall`2.RunCall(HttpRequestMessage request, Nullable`1 timeout)
   --- End of inner exception stack trace ---
   at Grpc.Net.Client.Internal.GrpcCall`2.GetResponseHeadersCoreAsync()
   at Grpc.Net.Client.Internal.Retry.RetryCallBase`2.GetResponseHeadersCoreAsync()
   at Aspire.Dashboard.ServiceClient.DashboardClient.IsUnimplemented(AsyncDuplexStreamingCall`2 call) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 511
   at Aspire.Dashboard.ServiceClient.DashboardClient.WatchInteractionsAsync(RetryContext retryContext, CancellationToken cancellationToken) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 437
   at Aspire.Dashboard.ServiceClient.DashboardClient.WatchWithRecoveryAsync(Func`3 action, String actionName, CancellationToken cancellationToken) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 321
         at Aspire.Dashboard.ServiceClient.DashboardClient.IsUnimplemented(AsyncDuplexStreamingCall`2 call) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 511
         at Aspire.Dashboard.ServiceClient.DashboardClient.WatchInteractionsAsync(RetryContext retryContext, CancellationToken cancellationToken) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 437
         at Aspire.Dashboard.ServiceClient.DashboardClient.WatchWithRecoveryAsync(Func`3 action, String actionName, CancellationToken cancellationToken) in /_/src/Aspire.Dashboard/ServiceClient/DashboardClient.cs:line 321
```

This error seemed to occur whenever I attempted to connect my API and frontend, so it seemed to have something to do with network calls. 

These days, working with AI, I naturally let both GitHub Copilot (with various models) and ChatGPT Codex have its go on this error. No AI actually managed to solve the issue, but I got one key signal when one of them told me there might be a proxy issue. 

It occurred to me that I’m using [Freedom](https://freedom.to) to avoid distractions when I’m working, and this actually uses a proxy to block web sites and all. So to solve the exceptions, and get Aspire working again, I needed to add localhost as an exception to the proxy. 

On MacOS, this is as simple as clicking the Freedom icon, and “Enable website Exceptions”.
![Screen shot of Freedom menu options](/images/Skjermbilde%202026-02-02%20kl.%2006.28.05.png)

Next you will also need to add the actual exception, which can be done by clicking the same icon, and then click “Manage website exceptions”. This will open a popup window, where you can add localhost and 127.0.0.1. (SCREENSHOT HERE) 
![Screen shot of Freedom add exception websites](/images/Skjermbilde%202026-02-02%20kl.%2006.29.01.png)

Keep in mind that this will only be available to edit outside of a focus session.