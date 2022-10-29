function FindProxyForURL(url, host){
    if (dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "www.google.com")) {
      return "SOCKS 10.0.0.3:9011";
    }
     return "DIRECT";
}