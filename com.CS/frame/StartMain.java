package frame;

import until.http.Server;

public class StartMain {
    public static void main(String[] args) throws Exception {
        Server server = new Server();
        server.start(8000);
    }
}
