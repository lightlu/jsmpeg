//host = '127.0.0.1';
port = 1884;
topic = '#';		// topic to subscribe to
useTLS = false;
username = null;
password = null;

// path as in "scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]"
//    defaults to "/mqtt"
//    may include query and fragment
//
// path = "/mqtt";
// path = "/data/cloud?device=12345";
path = "/";

cleansession = true;
