package DAO.config;

import org.apache.log4j.PropertyConfigurator;

public class ConfigInit {
    public static String UPPERCHANNEL = "test1";
    public static String DATACHANNELL = "data";
    public static String LONGCONNSERVER_CHANNEL = "";
    public static int HTTPPORT = 8888;
    public static int LONGCONNECTION_PORT = 9999;
    public static String REDIS_IP = "127.0.0.1";
    public static int REDIS_PORT = 6379;
    public static String logFile="./Logger/log4j.propertites";
    public static boolean REDIS_MUL= true;

    public static void logPropertyConfig(){
        PropertyConfigurator.configure(logFile);
    }
}
