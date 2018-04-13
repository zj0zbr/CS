package bean;


abstract public class Observer {

    abstract public void die();

    abstract public void displayTeam(String name);

    abstract public void displayEnemy(String name);

    abstract public String getName();

    abstract public void setName();

    abstract public String getType();

    abstract public void setType(String type);
}
